import { useEffect, useRef } from "react";

interface WorkflowCanvasProps {
  workflowData?: any;
  embedUrl?: string;
  workflowId?: string;
}

// Declare n8n-demo web component type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'n8n-demo': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        workflow?: string;
        collapseformobile?: string;
        clicktointeract?: string;
        hidecanvaserrors?: string;
        disableinteractivity?: string;
        theme?: string;
        frame?: string;
      }, HTMLElement>;
    }
  }
}

export const WorkflowCanvas = ({ workflowData, embedUrl, workflowId }: WorkflowCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    // Only load scripts once
    if (scriptsLoadedRef.current) return;
    scriptsLoadedRef.current = true;

    // Load required scripts in order
    const webcomponentsScript = document.createElement('script');
    webcomponentsScript.src = 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js';
    document.head.appendChild(webcomponentsScript);

    webcomponentsScript.onload = () => {
      const litScript = document.createElement('script');
      litScript.src = 'https://www.unpkg.com/lit@2.0.0-rc.2/polyfill-support.js';
      document.head.appendChild(litScript);

      litScript.onload = () => {
        const n8nScript = document.createElement('script');
        n8nScript.type = 'module';
        n8nScript.src = 'https://cdn.jsdelivr.net/npm/@n8n_io/n8n-demo-component/n8n-demo.bundled.js';
        document.head.appendChild(n8nScript);
      };
    };

    return () => {
      // Cleanup is handled by browser
    };
  }, []);

  // If we have workflow data, use n8n-demo component
  if (workflowData) {
    const workflowJson = JSON.stringify(workflowData);

    return (
      <div
        ref={containerRef}
        className="relative w-full rounded-xl border-2 border-border overflow-hidden bg-white"
      >
        <n8n-demo
          workflow={workflowJson}
          collapseformobile="false"
          clicktointeract="true"
          hidecanvaserrors="true"
          disableinteractivity="false"
          theme="light"
          frame="true"
          style={{ display: 'block', width: '100%' }}
        />
      </div>
    );
  }

  // Fallback: use embed URL if provided
  if (embedUrl) {
    return (
      <div
        className="relative w-full rounded-xl border-2 border-border overflow-hidden bg-background"
        style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
      >
        <iframe
          src={embedUrl}
          className="w-full h-full"
          style={{ height: '100%' }}
          frameBorder="0"
          allow="clipboard-read; clipboard-write"
          title="n8n workflow"
        />
      </div>
    );
  }

  // No workflow data available
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-background via-muted/20 to-background rounded-xl border-2 border-border flex items-center justify-center">
      <div className="text-center p-8">
        <p className="text-muted-foreground mb-4">
          Workflow preview không khả dụng
        </p>
      </div>
    </div>
  );
};
