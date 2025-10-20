-- Update case studies with English content and images
UPDATE public.case_studies
SET 
  title = 'E-commerce Order Automation System',
  excerpt = 'Automated order processing system that reduced manual work by 85% and processing time from 2 hours to 5 minutes per order.',
  image_url = '/src/assets/workflow-invoice-payment.jpg',
  content = '<h2>Challenge</h2><p>The client was processing 500+ orders daily with a 5-person team manually entering data across multiple systems, leading to frequent errors and delays.</p><h2>Solution</h2><p>Implemented n8n workflow automation integrating:</p><ul><li>Shopify API for order capture</li><li>Inventory management system sync</li><li>Automated invoice generation</li><li>Email notifications to customers</li><li>CRM data updates</li></ul><h2>Results</h2><ul><li>85% reduction in manual processing time</li><li>Order processing time: 2 hours → 5 minutes</li><li>99.8% accuracy rate (up from 92%)</li><li>Team reassigned to customer service</li><li>$120K annual cost savings</li></ul>'
WHERE slug = 'e-commerce-order-automation';

UPDATE public.case_studies
SET 
  title = 'AI-Powered Customer Support System',
  excerpt = 'Intelligent chatbot and ticket routing system that handles 70% of inquiries automatically with 95% customer satisfaction.',
  image_url = '/src/assets/workflow-ticket-triage.jpg',
  content = '<h2>Challenge</h2><p>Customer support team overwhelmed with 1000+ daily inquiries, leading to 24-hour response times and customer churn.</p><h2>Solution</h2><p>Built comprehensive AI support system with n8n:</p><ul><li>OpenAI GPT-4 powered chatbot</li><li>Intelligent ticket classification and routing</li><li>Automated response generation for common issues</li><li>Sentiment analysis for priority escalation</li><li>Multi-channel integration (email, chat, social)</li></ul><h2>Results</h2><ul><li>70% of inquiries resolved automatically</li><li>Response time: 24h → 2 minutes average</li><li>95% customer satisfaction score</li><li>Support team reduced by 40%</li><li>$200K annual savings</li></ul>'
WHERE slug = 'ai-customer-support-automation';

UPDATE public.case_studies
SET 
  title = 'Marketing Campaign Automation Platform',
  excerpt = 'Multi-channel marketing automation that increased conversion rates by 145% and reduced campaign setup time by 90%.',
  image_url = '/src/assets/workflow-content-repurposing.jpg',
  content = '<h2>Challenge</h2><p>Marketing team spending 3 days to set up each campaign across email, social media, and advertising platforms manually.</p><h2>Solution</h2><p>Created unified marketing automation platform using n8n:</p><ul><li>Content scheduling and distribution</li><li>Automated A/B testing workflows</li><li>Lead scoring and segmentation</li><li>Social media cross-posting</li><li>Performance analytics dashboard</li></ul><h2>Results</h2><ul><li>Campaign setup time: 3 days → 2 hours</li><li>145% increase in conversion rates</li><li>300% more campaigns executed</li><li>Unified analytics across all channels</li><li>$180K additional revenue per quarter</li></ul>'
WHERE slug = 'marketing-automation-platform';

UPDATE public.case_studies
SET 
  title = 'Financial Reporting Automation',
  excerpt = 'Automated financial data aggregation and reporting system that reduced month-end close from 5 days to 6 hours.',
  image_url = '/src/assets/workflow-invoice-payment.jpg',
  content = '<h2>Challenge</h2><p>Finance team manually collecting data from 15+ systems and spreadsheets, taking 5 days for month-end close with high error risk.</p><h2>Solution</h2><p>Implemented comprehensive financial automation with n8n:</p><ul><li>Multi-system data integration (ERP, CRM, payment processors)</li><li>Automated reconciliation workflows</li><li>Real-time dashboard generation</li><li>Automated report distribution</li><li>Anomaly detection alerts</li></ul><h2>Results</h2><ul><li>Month-end close: 5 days → 6 hours</li><li>99.9% accuracy in reports</li><li>Real-time financial visibility</li><li>Audit trail automation</li><li>CFO team productivity increased 400%</li></ul>'
WHERE slug = 'financial-reporting-automation';

UPDATE public.case_studies
SET 
  title = 'Sales Pipeline Automation System',
  excerpt = 'Intelligent lead nurturing and sales automation that increased qualified leads by 220% and shortened sales cycle by 45%.',
  image_url = '/src/assets/workflow-ai-lead-nurture.jpg',
  content = '<h2>Challenge</h2><p>Sales team losing qualified leads due to slow follow-up and inconsistent nurturing processes across 5 team members.</p><h2>Solution</h2><p>Built intelligent sales automation platform with n8n:</p><ul><li>Automated lead scoring and qualification</li><li>Personalized email sequences</li><li>Meeting scheduling automation</li><li>CRM data enrichment from multiple sources</li><li>Sales activity tracking and alerts</li></ul><h2>Results</h2><ul><li>220% increase in qualified leads</li><li>Sales cycle reduced by 45%</li><li>Lead response time: 2 days → 5 minutes</li><li>40% improvement in conversion rate</li><li>$500K additional monthly revenue</li></ul>'
WHERE slug = 'sales-pipeline-automation';

UPDATE public.case_studies
SET 
  title = 'HR Onboarding Automation',
  excerpt = 'Streamlined employee onboarding workflow that reduced onboarding time from 3 weeks to 3 days with 98% completion rate.',
  image_url = '/src/assets/workflow-client-onboarding.jpg',
  content = '<h2>Challenge</h2><p>HR team manually coordinating onboarding across 8 departments, taking 3 weeks per employee with inconsistent experience.</p><h2>Solution</h2><p>Created comprehensive onboarding automation with n8n:</p><ul><li>Automated document collection and verification</li><li>Equipment and access provisioning workflows</li><li>Training schedule automation</li><li>Multi-department coordination</li><li>Progress tracking and reminders</li></ul><h2>Results</h2><ul><li>Onboarding time: 3 weeks → 3 days</li><li>98% task completion rate</li><li>100% consistent experience</li><li>New hire satisfaction increased to 4.8/5</li><li>HR team capacity increased 300%</li></ul>'
WHERE slug = 'hr-onboarding-automation';

UPDATE public.case_studies
SET 
  title = 'Multi-Platform Data Integration Hub',
  excerpt = 'Real-time data synchronization across 20+ business systems eliminating data silos and enabling unified analytics.',
  image_url = '/src/assets/blog-rag-systems.jpg',
  content = '<h2>Challenge</h2><p>Company using 20+ disconnected systems leading to data silos, duplicate entries, and inability to get unified business insights.</p><h2>Solution</h2><p>Built enterprise integration platform using n8n:</p><ul><li>Real-time bidirectional data sync</li><li>Data transformation and normalization</li><li>Conflict resolution workflows</li><li>Master data management</li><li>Unified analytics dashboard</li></ul><h2>Results</h2><ul><li>20+ systems integrated seamlessly</li><li>Data accuracy improved to 99.7%</li><li>Real-time business intelligence</li><li>Zero data duplication</li><li>Decision-making speed increased 10x</li></ul>'
WHERE slug = 'data-integration-hub';

UPDATE public.case_studies
SET 
  title = 'Document Processing Automation',
  excerpt = 'AI-powered document extraction and processing system that handles 10,000+ documents daily with 99.5% accuracy.',
  image_url = '/src/assets/case-study-document-processing.jpg',
  content = '<h2>Challenge</h2><p>Team manually processing 500+ invoices, contracts, and forms daily, taking 8 hours with frequent data entry errors.</p><h2>Solution</h2><p>Implemented intelligent document automation with n8n:</p><ul><li>OCR and AI-powered data extraction</li><li>Automated document classification</li><li>Data validation and verification workflows</li><li>Multi-format document handling (PDF, images, scans)</li><li>Integration with accounting and CRM systems</li></ul><h2>Results</h2><ul><li>10,000+ documents processed daily</li><li>99.5% extraction accuracy</li><li>Processing time: 8 hours → 30 minutes</li><li>Cost per document reduced 95%</li><li>$250K annual cost savings</li></ul>'
WHERE slug = 'document-processing-automation';

UPDATE public.case_studies
SET 
  title = 'Social Media Management Automation',
  excerpt = 'Centralized social media workflow that increased posting frequency by 400% and engagement by 280%.',
  image_url = '/src/assets/workflow-content-repurposing.jpg',
  content = '<h2>Challenge</h2><p>Marketing team struggling to maintain consistent presence across 6 social platforms, posting only 2-3 times per week per platform.</p><h2>Solution</h2><p>Created unified social media automation with n8n:</p><ul><li>Content scheduling and cross-posting</li><li>Automated content repurposing</li><li>Engagement monitoring and response</li><li>Hashtag and trend analysis</li><li>Performance analytics and reporting</li></ul><h2>Results</h2><ul><li>Posting frequency increased 400%</li><li>Engagement rate increased 280%</li><li>Follower growth rate tripled</li><li>Content creation time reduced 70%</li><li>Consistent brand voice across platforms</li></ul>'
WHERE slug = 'social-media-automation';

UPDATE public.case_studies
SET 
  title = 'Slack AI Assistant Integration',
  excerpt = 'Custom AI assistant that answers team questions, automates workflows, and provides insights directly in Slack.',
  image_url = '/src/assets/workflow-slack-ai-assistant.jpg',
  content = '<h2>Challenge</h2><p>Team spending 2+ hours daily searching for information across multiple tools and waiting for responses from different departments.</p><h2>Solution</h2><p>Built intelligent Slack assistant using n8n:</p><ul><li>GPT-4 powered conversational AI</li><li>Integration with company knowledge base</li><li>Automated workflow triggers from chat</li><li>Real-time data queries and reports</li><li>Smart reminders and task management</li></ul><h2>Results</h2><ul><li>Information retrieval time: 15 min → 30 seconds</li><li>2 hours saved per employee daily</li><li>90% of routine questions answered instantly</li><li>Team productivity increased 35%</li><li>$300K annual productivity savings</li></ul>'
WHERE slug = 'slack-ai-assistant';