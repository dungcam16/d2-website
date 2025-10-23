import { Workflow, Zap, Database, Mail, FileText, CheckCircle } from "lucide-react";

const WorkflowAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210 100% 45%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(210 100% 45%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(200 100% 55%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Line from node 1 to node 2 */}
        <path
          d="M 20% 30% L 40% 30%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          className="animate-pulse-glow"
        />
        
        {/* Line from node 2 to node 3 */}
        <path
          d="M 60% 30% L 80% 30%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          className="animate-pulse-glow"
          style={{ animationDelay: "0.3s" }}
        />
        
        {/* Line from node 2 to node 4 */}
        <path
          d="M 50% 40% L 50% 60%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          className="animate-pulse-glow"
          style={{ animationDelay: "0.6s" }}
        />
      </svg>

      {/* Workflow Nodes */}
      <div className="absolute left-[15%] top-[25%] workflow-node animate-node-appear" style={{ animationDelay: "0s" }}>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="text-sm font-semibold">Data Source</div>
            <div className="text-xs text-muted-foreground">Trigger</div>
          </div>
        </div>
        {/* Data flow animation */}
        <div className="absolute left-full top-1/2 w-20 h-1 overflow-hidden">
          <div className="absolute w-8 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow" />
        </div>
      </div>

      <div className="absolute left-[40%] top-[25%] workflow-node animate-node-appear" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Workflow className="w-6 h-6 text-accent" />
          </div>
          <div>
            <div className="text-sm font-semibold">AI Process</div>
            <div className="text-xs text-muted-foreground">Transform</div>
          </div>
        </div>
        {/* Data flow animation */}
        <div className="absolute left-full top-1/2 w-20 h-1 overflow-hidden">
          <div className="absolute w-8 h-full bg-gradient-to-r from-transparent via-accent to-transparent animate-data-flow" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="absolute left-1/2 top-full w-1 h-20 overflow-hidden">
          <div className="absolute h-8 w-full bg-gradient-to-b from-transparent via-accent to-transparent animate-data-flow" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="absolute right-[15%] top-[25%] workflow-node animate-node-appear" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <Mail className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <div className="text-sm font-semibold">Send Email</div>
            <div className="text-xs text-muted-foreground">Output</div>
          </div>
        </div>
      </div>

      <div className="absolute left-[40%] bottom-[20%] workflow-node animate-node-appear" style={{ animationDelay: "0.6s" }}>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <FileText className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <div className="text-sm font-semibold">Store Data</div>
            <div className="text-xs text-muted-foreground">Database</div>
          </div>
        </div>
      </div>

      {/* Active workflow indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full animate-workflow-active">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-green-600">Active Workflow</span>
      </div>

      {/* Execution count */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
        <CheckCircle className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-primary">2,847 Executions</span>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
