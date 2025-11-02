import { useEffect, useMemo, useState, ReactNode } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Workflow, Zap, Settings } from "lucide-react";

interface WorkflowVisualizerProps {
  workflowJson: any;
  className?: string;
}

interface N8nNodeData {
  label: string;
  nodeType: string;
  icon: ReactNode;
  disabled?: boolean;
  parameters?: any;
}

// Custom Node Component for n8n nodes
const N8nNode = ({ data }: { data: N8nNodeData }) => {
  return (
    <Card className="min-w-[180px] shadow-lg border-2 hover:shadow-xl transition-shadow">
      <div className="p-3">
        <Handle type="target" position={Position.Left} className="w-2 h-2" />
        
        <div className="flex items-center gap-2 mb-2">
          {data.icon || <Workflow className="h-4 w-4 text-primary" />}
          <span className="font-semibold text-sm">{data.label}</span>
        </div>
        
        {data.nodeType && (
          <Badge variant="secondary" className="text-xs">
            {String(data.nodeType).replace("n8n-nodes-base.", "")}
          </Badge>
        )}
        
        {data.disabled && (
          <Badge variant="outline" className="text-xs mt-1">
            Disabled
          </Badge>
        )}
        
        <Handle type="source" position={Position.Right} className="w-2 h-2" />
      </div>
    </Card>
  );
};

const nodeTypes = {
  n8nNode: N8nNode,
};

export const WorkflowVisualizer = ({ workflowJson, className = "" }: WorkflowVisualizerProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Parse n8n workflow JSON and convert to React Flow format
  const { parsedNodes, parsedEdges } = useMemo(() => {
    try {
      if (!workflowJson || !workflowJson.nodes) {
        return { parsedNodes: [], parsedEdges: [] };
      }

      const nodes: Node[] = workflowJson.nodes.map((node: any, index: number) => {
        // Get icon based on node type
        let icon: ReactNode = <Workflow className="h-4 w-4 text-primary" />;
        if (node.type?.includes("webhook")) {
          icon = <Zap className="h-4 w-4 text-yellow-500" />;
        } else if (node.type?.includes("trigger")) {
          icon = <Zap className="h-4 w-4 text-green-500" />;
        } else if (node.type?.includes("slack") || node.type?.includes("notification")) {
          icon = <Settings className="h-4 w-4 text-blue-500" />;
        }

        return {
          id: node.name || `node-${index}`,
          type: "n8nNode",
          position: {
            x: node.position?.[0] || index * 250,
            y: node.position?.[1] || 100,
          },
          data: {
            label: node.name || node.type || "Node",
            nodeType: node.type || "",
            icon,
            disabled: node.disabled,
            parameters: node.parameters,
          },
        };
      });

      // Parse connections
      const edges: Edge[] = [];
      if (workflowJson.connections) {
        Object.entries(workflowJson.connections).forEach(([sourceName, connections]: [string, any]) => {
          if (connections.main && Array.isArray(connections.main)) {
            connections.main.forEach((connectionArray: any[]) => {
              connectionArray.forEach((connection: any) => {
                if (connection.node) {
                  edges.push({
                    id: `e-${sourceName}-${connection.node}-${connection.index || 0}`,
                    source: sourceName,
                    target: connection.node,
                    type: "smoothstep",
                    animated: true,
                    style: { stroke: "hsl(var(--primary))", strokeWidth: 2 },
                  });
                }
              });
            });
          }
        });
      }

      return { parsedNodes: nodes, parsedEdges: edges };
    } catch (err) {
      console.error("Error parsing workflow JSON:", err);
      setError("Unable to parse workflow structure");
      return { parsedNodes: [], parsedEdges: [] };
    }
  }, [workflowJson]);

  const [nodes, setNodes, onNodesChange] = useNodesState(parsedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(parsedEdges);

  useEffect(() => {
    setNodes(parsedNodes);
    setEdges(parsedEdges);
    setLoading(false);
  }, [parsedNodes, parsedEdges, setNodes, setEdges]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-muted/20 rounded-lg border border-border">
        <div className="text-center">
          <Workflow className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-muted/20 rounded-lg border border-border">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Loading workflow visualization...</p>
        </div>
      </div>
    );
  }

  if (nodes.length === 0) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-muted/20 rounded-lg border border-border">
        <div className="text-center">
          <Workflow className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No workflow nodes found</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-[600px] rounded-lg border border-border overflow-hidden bg-background ${className}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        minZoom={0.2}
        maxZoom={2}
      >
        <Background />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            const n8nData = node.data as unknown as N8nNodeData;
            if (n8nData?.disabled) return "hsl(var(--muted))";
            return "hsl(var(--primary))";
          }}
          className="bg-background border border-border"
        />
        <Panel position="top-left" className="bg-background/95 backdrop-blur-sm rounded-md border border-border p-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Workflow className="h-4 w-4" />
            <span>{nodes.length} nodes • {edges.length} connections</span>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};
