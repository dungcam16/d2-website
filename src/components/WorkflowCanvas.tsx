import { useEffect, useRef } from "react";

// Declare n8n-demo web component for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'n8n-demo': {
        workflow?: string;
        collapseformobile?: string;
        clicktointeract?: string;
        hidecanvaserrors?: string;
        disableinteractivity?: string;
        theme?: string;
        frame?: string;
      };
    }
  }
}

interface WorkflowCanvasProps {
  workflowData?: any;
  embedUrl?: string;
  workflowId?: string;
}

const WorkflowCanvas = ({ workflowData, embedUrl, workflowId }: WorkflowCanvasProps) => {
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    // Only load scripts once
    if (scriptsLoadedRef.current) return;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        // Load scripts in sequence
        await loadScript('https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js');
        await loadScript('https://www.unpkg.com/lit@2.0.0-rc.2/polyfill-support.js');
        await loadScript('https://cdn.jsdelivr.net/npm/@n8n_io/n8n-demo-component/n8n-demo.bundled.js');
        
        scriptsLoadedRef.current = true;
      } catch (error) {
        console.error('Error loading n8n scripts:', error);
      }
    };

    loadScripts();
  }, []);

  // Priority 1: workflowData with n8n-demo component
  if (workflowData) {
    return (
      <div className="w-full rounded-xl border-2 border-border bg-white overflow-hidden">
        <n8n-demo
          workflow={JSON.stringify(workflowData)}
          collapseformobile="false"
          clicktointeract="true"
          hidecanvaserrors="true"
          disableinteractivity="false"
          theme="light"
          frame="true"
        />
      </div>
    );
  }

  // Priority 2: embedUrl with iframe
  if (embedUrl) {
    return (
      <div className="w-full rounded-xl border-2 border-border bg-background overflow-hidden">
        <iframe
          src={embedUrl}
          className="w-full border-0"
          style={{ 
            height: 'calc(100vh - 200px)',
            minHeight: '600px'
          }}
          title="N8N Workflow"
          allow="clipboard-read; clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    );
  }

  // Priority 3: Fallback message
  return (
    <div className="w-full rounded-xl border-2 border-border bg-muted/20 overflow-hidden">
      <div className="flex items-center justify-center p-12">
        <p className="text-muted-foreground text-center">
          Workflow preview không khả dụng
        </p>
      </div>
    </div>
  );
};

export default WorkflowCanvas;
