-- Create sample blog post
INSERT INTO public.blog_posts (
  slug,
  title,
  excerpt,
  content,
  author,
  tags,
  keyword,
  services,
  is_published
) VALUES (
  'getting-started-with-n8n-automation',
  'Getting Started with n8n Automation: A Complete Guide',
  'Learn how to build your first n8n workflow and automate repetitive tasks in minutes. This comprehensive guide covers everything from setup to deployment.',
  '<h2>Introduction to n8n Automation</h2><p>n8n is a powerful, open-source workflow automation tool that helps businesses streamline their operations. Whether you''re a developer or a business user, n8n makes it easy to connect different applications and automate repetitive tasks.</p><h2>Why Choose n8n?</h2><ul><li>Open-source and self-hostable</li><li>400+ integrations available</li><li>Visual workflow builder</li><li>No vendor lock-in</li></ul><h2>Getting Started</h2><p>To begin with n8n, you first need to set up your environment. You can either use n8n cloud or self-host it on your own server. For most users, we recommend starting with n8n cloud to get familiar with the platform.</p><h2>Building Your First Workflow</h2><p>A workflow in n8n consists of nodes that perform specific actions. Each node can trigger an action, process data, or connect to external services. Here''s how to create a simple workflow:</p><ol><li>Create a new workflow</li><li>Add a trigger node</li><li>Add action nodes</li><li>Connect the nodes</li><li>Test and activate</li></ol><h2>Best Practices</h2><p>When building workflows, always follow these best practices:</p><ul><li>Keep workflows simple and focused</li><li>Use error handling nodes</li><li>Test thoroughly before going live</li><li>Document your workflows</li></ul><h2>Conclusion</h2><p>n8n automation can transform how your business operates. Start small, learn the basics, and gradually build more complex workflows as you gain experience.</p>',
  'D2 Group',
  ARRAY['n8n', 'automation', 'workflow', 'tutorial'],
  'n8n automation guide',
  'n8n Automation',
  true
);

-- Create sample n8n template
INSERT INTO public.workflow_templates (
  slug,
  title,
  description,
  content,
  author,
  category,
  tags,
  difficulty_level,
  node_count,
  integrations,
  workflow_json,
  is_published
) VALUES (
  'slack-notification-workflow',
  'Automated Slack Notification System',
  'Send automated notifications to Slack channels when specific events occur in your applications',
  '<h2>Overview</h2><p>This workflow automatically sends notifications to your Slack workspace when important events occur. Perfect for monitoring systems, sales notifications, or customer support alerts.</p><h2>Use Cases</h2><ul><li>Sales team notifications for new leads</li><li>Customer support alerts</li><li>System monitoring alerts</li><li>Daily digest reports</li></ul><h2>Features</h2><ul><li>Customizable message templates</li><li>Multiple channel support</li><li>Error handling and retry logic</li><li>Conditional routing based on priority</li></ul><h2>Setup Instructions</h2><ol><li>Import this workflow into your n8n instance</li><li>Configure your Slack credentials</li><li>Set up the webhook trigger</li><li>Customize the message template</li><li>Test and activate the workflow</li></ol><h2>Configuration</h2><p>You''ll need to configure the following:</p><ul><li>Slack OAuth token</li><li>Target channel IDs</li><li>Message format preferences</li><li>Retry settings</li></ul>',
  'D2 Group',
  'Notifications',
  ARRAY['slack', 'notifications', 'webhook', 'monitoring'],
  'beginner',
  5,
  ARRAY['Slack', 'Webhook', 'HTTP Request'],
  '{"nodes": [{"parameters": {"httpMethod": "POST", "path": "webhook", "responseMode": "onReceived"}, "name": "Webhook", "type": "n8n-nodes-base.webhook", "position": [250, 300]}, {"parameters": {"authentication": "oAuth2", "channel": "={{$json.channel}}", "text": "={{$json.message}}"}, "name": "Slack", "type": "n8n-nodes-base.slack", "position": [450, 300]}], "connections": {"Webhook": {"main": [[{"node": "Slack", "type": "main", "index": 0}]]}}}',
  true
);