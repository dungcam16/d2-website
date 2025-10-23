-- Insert 9 new case studies with detailed content
INSERT INTO case_studies (title, slug, excerpt, content, category, client, image_url, is_published, order_index) VALUES
(
  'RAG-Powered Chatbot Pipelines',
  'rag-powered-chatbot-pipelines',
  'Built intelligent chatbot system using RAG (Retrieval-Augmented Generation) with n8n, enabling real-time knowledge retrieval and contextual responses for enterprise clients.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Enterprise client needed a chatbot capable of answering complex questions using their internal knowledge base of over 50,000 documents, with real-time updates and multi-language support.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Developed a comprehensive RAG pipeline using n8n that:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Automated document ingestion and vector embedding generation</li>
      <li>Integrated GPT-4 and Claude for intelligent response generation</li>
      <li>Built real-time semantic search with Pinecone vector database</li>
      <li>Implemented multi-turn conversation with context retention</li>
      <li>Created automated feedback loop for continuous improvement</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">95%</div>
        <div class="text-sm">Answer Accuracy</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">70%</div>
        <div class="text-sm">Support Cost Reduction</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">24/7</div>
        <div class="text-sm">Automated Support</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • GPT-4 • Claude • Pinecone • PostgreSQL • Supabase</p>
  </div>',
  'AI & Machine Learning',
  'Enterprise SaaS Company',
  '/src/assets/blog-rag-systems.jpg',
  true,
  1
),
(
  'End-to-End Sales Lead Management',
  'end-to-end-sales-lead-management',
  'Automated complete sales pipeline from lead capture to CRM integration using n8n, reducing manual data entry by 90% and improving lead response time by 5x.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Sales team was losing 30% of leads due to slow manual processing, data entry errors, and lack of real-time lead scoring and assignment.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Built comprehensive lead management automation with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Multi-channel lead capture (website, LinkedIn, email, ads)</li>
      <li>AI-powered lead scoring and qualification</li>
      <li>Automated lead enrichment with company data</li>
      <li>Intelligent lead assignment based on territory and expertise</li>
      <li>CRM sync with Salesforce and HubSpot</li>
      <li>Real-time Slack notifications for hot leads</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">90%</div>
        <div class="text-sm">Less Manual Work</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">5x</div>
        <div class="text-sm">Faster Response</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">45%</div>
        <div class="text-sm">Higher Conversion</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • Salesforce • HubSpot • LinkedIn API • GPT-4 • Slack</p>
  </div>',
  'Sales & CRM',
  'B2B Tech Company',
  '/src/assets/workflow-ai-lead-nurture.jpg',
  true,
  2
),
(
  'AI-Driven Data Extraction & Categorization',
  'ai-driven-data-extraction-categorization',
  'Automated document processing and data extraction using AI, processing 10,000+ documents monthly with 98% accuracy for a financial services firm.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Financial services company needed to extract and categorize data from various document types (invoices, contracts, reports) with high accuracy and compliance requirements.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Developed intelligent document processing pipeline with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>OCR and text extraction from PDFs, images, and scanned documents</li>
      <li>AI-powered entity recognition and data extraction</li>
      <li>Automated document categorization and routing</li>
      <li>Data validation and quality checks</li>
      <li>Integration with existing ERP and database systems</li>
      <li>Audit trail and compliance reporting</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">98%</div>
        <div class="text-sm">Extraction Accuracy</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">85%</div>
        <div class="text-sm">Time Saved</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">10K+</div>
        <div class="text-sm">Docs/Month</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • GPT-4 Vision • Claude • Tesseract OCR • PostgreSQL • AWS S3</p>
  </div>',
  'Document Processing',
  'Financial Services Firm',
  '/src/assets/case-study-document-processing.jpg',
  true,
  3
),
(
  'Automated Content & SEO Pipeline',
  'automated-content-seo-pipeline',
  'Built end-to-end content creation and SEO optimization workflow using n8n and AI, generating 100+ optimized articles monthly with automated publishing and tracking.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Digital marketing agency needed to scale content production while maintaining quality, SEO optimization, and consistent brand voice across multiple client websites.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Created comprehensive content automation pipeline with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>AI-powered topic research and keyword analysis</li>
      <li>Automated content generation with brand voice training</li>
      <li>SEO optimization (meta tags, internal linking, readability)</li>
      <li>Image generation and optimization</li>
      <li>Multi-platform publishing (WordPress, Medium, LinkedIn)</li>
      <li>Performance tracking and A/B testing</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">100+</div>
        <div class="text-sm">Articles/Month</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">75%</div>
        <div class="text-sm">Cost Reduction</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">3x</div>
        <div class="text-sm">Organic Traffic</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • GPT-4 • Claude • WordPress API • Ahrefs • Google Analytics</p>
  </div>',
  'Marketing & Content',
  'Digital Marketing Agency',
  '/src/assets/blog-automation-ideas.jpg',
  true,
  4
),
(
  'Complex E-commerce Inventory Sync',
  'complex-ecommerce-inventory-sync',
  'Synchronized inventory across 5 sales channels in real-time using n8n, eliminating overselling and reducing stock discrepancies by 99%.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>E-commerce retailer selling across Amazon, eBay, Shopify, WooCommerce, and physical stores faced constant inventory mismatches, leading to overselling and customer complaints.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Built robust multi-channel inventory synchronization with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Real-time inventory tracking across all channels</li>
      <li>Bi-directional sync with conflict resolution</li>
      <li>Automated stock level adjustments and reordering</li>
      <li>Price synchronization with dynamic pricing rules</li>
      <li>Product data enrichment and categorization</li>
      <li>Order fulfillment automation</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">99%</div>
        <div class="text-sm">Accuracy Rate</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">95%</div>
        <div class="text-sm">Less Overselling</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">60%</div>
        <div class="text-sm">Time Saved</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • Shopify • Amazon MWS • eBay API • WooCommerce • PostgreSQL</p>
  </div>',
  'E-commerce',
  'Multi-Channel Retailer',
  '/src/assets/workflow-invoice-payment.jpg',
  true,
  5
),
(
  'Real-Time Error Handling & Monitoring',
  'real-time-error-handling-monitoring',
  'Implemented comprehensive error monitoring and auto-recovery system using n8n, reducing system downtime by 80% and improving incident response time to under 2 minutes.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>SaaS platform experienced frequent workflow failures and system errors that went undetected for hours, leading to data loss and customer complaints.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Built intelligent monitoring and error handling system with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Real-time error detection and classification</li>
      <li>Automated retry logic with exponential backoff</li>
      <li>Smart alerting with context and impact analysis</li>
      <li>Self-healing workflows with fallback mechanisms</li>
      <li>Comprehensive logging and audit trails</li>
      <li>Performance monitoring and anomaly detection</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">80%</div>
        <div class="text-sm">Less Downtime</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">&lt;2min</div>
        <div class="text-sm">Response Time</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">99.9%</div>
        <div class="text-sm">Uptime SLA</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • Sentry • Datadog • PagerDuty • Slack • PostgreSQL</p>
  </div>',
  'DevOps & Monitoring',
  'SaaS Platform',
  '/src/assets/workflow-ticket-triage.jpg',
  true,
  6
),
(
  'Multi-Tool Data Migration Scripts',
  'multi-tool-data-migration-scripts',
  'Orchestrated complex data migration from legacy systems to modern cloud infrastructure using n8n, migrating 5TB of data with zero downtime.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Enterprise needed to migrate 5TB of data from multiple legacy systems (Oracle, SQL Server, MongoDB) to modern cloud infrastructure while maintaining business continuity.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Designed and executed comprehensive migration strategy with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Automated data extraction with validation checks</li>
      <li>Intelligent data transformation and mapping</li>
      <li>Incremental migration with rollback capabilities</li>
      <li>Data quality assurance and reconciliation</li>
      <li>Zero-downtime cutover strategy</li>
      <li>Post-migration monitoring and validation</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">5TB</div>
        <div class="text-sm">Data Migrated</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">0</div>
        <div class="text-sm">Downtime</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">100%</div>
        <div class="text-sm">Data Integrity</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • PostgreSQL • MongoDB • Oracle • AWS • Kafka • Redis</p>
  </div>',
  'Data Engineering',
  'Enterprise Corporation',
  '/src/assets/workflow-client-onboarding.jpg',
  true,
  7
),
(
  'Dynamic Pricing & Notification Agent',
  'dynamic-pricing-notification-agent',
  'Built intelligent pricing engine and notification system using n8n and AI, optimizing prices in real-time and increasing revenue by 25%.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Hotel chain needed dynamic pricing based on demand, competition, events, and seasonality, plus personalized guest notifications to maximize occupancy and revenue.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Developed AI-powered pricing and notification system with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Real-time competitor price monitoring</li>
      <li>AI-driven demand forecasting and pricing optimization</li>
      <li>Event-based pricing adjustments</li>
      <li>Personalized guest notifications (email, SMS, push)</li>
      <li>Automated promotional campaigns</li>
      <li>Revenue analytics and reporting</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">25%</div>
        <div class="text-sm">Revenue Increase</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">15%</div>
        <div class="text-sm">Higher Occupancy</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">40%</div>
        <div class="text-sm">More Bookings</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • GPT-4 • Python • PostgreSQL • Twilio • SendGrid • Stripe</p>
  </div>',
  'Pricing & Notifications',
  'Hotel Chain',
  '/src/assets/workflow-content-repurposing.jpg',
  true,
  8
),
(
  'Custom Webhook & API Wrapper',
  'custom-webhook-api-wrapper',
  'Created unified API layer and webhook management system using n8n, integrating 20+ services and reducing integration complexity by 70%.',
  '<div class="space-y-6">
    <h2 class="text-2xl font-bold">Challenge</h2>
    <p>Tech startup needed to integrate with 20+ third-party services, each with different APIs, authentication methods, and webhook formats, causing development bottlenecks.</p>
    
    <h2 class="text-2xl font-bold mt-8">Solution</h2>
    <p>Built comprehensive API wrapper and webhook management with n8n:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Unified REST API with consistent interface</li>
      <li>Centralized authentication and key management</li>
      <li>Webhook normalization and routing</li>
      <li>Request/response transformation and validation</li>
      <li>Rate limiting and error handling</li>
      <li>API documentation and monitoring</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8">Results</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">70%</div>
        <div class="text-sm">Less Complexity</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">5x</div>
        <div class="text-sm">Faster Integration</div>
      </div>
      <div class="p-4 bg-primary/10 rounded-lg">
        <div class="text-3xl font-bold text-primary">20+</div>
        <div class="text-sm">Services United</div>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold mt-8">Tech Stack</h2>
    <p>n8n • Express • PostgreSQL • Redis • JWT • OpenAPI • Swagger</p>
  </div>',
  'API Integration',
  'Tech Startup',
  '/src/assets/workflow-slack-ai-assistant.jpg',
  true,
  9
);