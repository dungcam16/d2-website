-- Insert 10 AI Automation case studies for n8n projects

INSERT INTO public.case_studies (
  title,
  slug,
  category,
  client,
  excerpt,
  content,
  image_url,
  is_published,
  order_index
) VALUES
(
  'Tự động hóa xử lý đơn hàng E-commerce với N8N và AI',
  'ecommerce-order-automation-n8n',
  'E-commerce Automation',
  'ShopViet - Thương mại điện tử',
  'Xây dựng hệ thống tự động xử lý đơn hàng, đồng bộ kho, và thông báo khách hàng tự động, giảm 80% thời gian xử lý thủ công.',
  '<h2>Thách thức</h2><p>ShopViet đang xử lý hơn 500 đơn hàng mỗi ngày từ nhiều kênh bán hàng (website, Shopee, Lazada, Facebook). Việc xử lý thủ công gây ra nhiều lỗi và chậm trễ trong việc cập nhật kho và thông báo khách hàng.</p><h2>Giải pháp</h2><p>Chúng tôi đã triển khai workflow N8N tự động hóa toàn bộ quy trình:</p><ul><li>Tự động nhận đơn hàng từ tất cả các kênh bán hàng qua API</li><li>Kiểm tra tồn kho real-time và cập nhật tự động</li><li>Tạo phiếu xuất kho và gửi cho bộ phận logistics</li><li>Gửi email/SMS xác nhận đơn hàng cho khách hàng</li><li>Cập nhật trạng thái đơn hàng vào CRM</li><li>AI chatbot trả lời tự động câu hỏi về trạng thái đơn hàng</li></ul><h2>Kết quả</h2><ul><li>Giảm 80% thời gian xử lý đơn hàng</li><li>Tăng 95% độ chính xác trong quản lý kho</li><li>Cải thiện trải nghiệm khách hàng với thông báo real-time</li><li>Tiết kiệm 3 nhân sự xử lý đơn hàng</li><li>ROI đạt được sau 2 tháng triển khai</li></ul>',
  '/placeholder.svg',
  true,
  1
),
(
  'Hệ thống AI phân loại và xử lý ticket support tự động',
  'ai-support-ticket-routing-n8n',
  'Customer Support Automation',
  'TechSupport Pro - Dịch vụ CNTT',
  'Triển khai AI phân tích và phân loại ticket support tự động, định tuyến đến đúng chuyên viên, giảm 60% thời gian phản hồi.',
  '<h2>Bối cảnh</h2><p>TechSupport Pro nhận hơn 300 ticket hỗ trợ mỗi ngày từ email, form website, và chat. Việc phân loại và phân công thủ công gây chậm trễ và sai sót.</p><h2>Giải pháp N8N + AI</h2><p>Chúng tôi xây dựng workflow thông minh:</p><ul><li>Nhận ticket từ đa kênh (email, Zendesk, chat, form)</li><li>AI phân tích nội dung và phân loại mức độ ưu tiên (urgent/high/medium/low)</li><li>AI xác định danh mục kỹ thuật (network, software, hardware, security)</li><li>Tự động phân công cho chuyên viên phù hợp dựa trên khả năng và workload</li><li>Gửi thông báo Slack/Teams cho team phụ trách</li><li>Với các vấn đề đơn giản, AI chatbot trả lời tự động</li><li>Theo dõi SLA và cảnh báo nếu ticket sắp quá hạn</li></ul><h2>Kết quả đạt được</h2><ul><li>Giảm 60% thời gian phản hồi ban đầu</li><li>Tăng 85% độ chính xác trong phân loại</li><li>40% ticket được giải quyết tự động bởi AI</li><li>Cải thiện customer satisfaction score từ 3.2/5 lên 4.7/5</li><li>Team có thể xử lý gấp 2x số lượng ticket</li></ul>',
  '/placeholder.svg',
  true,
  2
),
(
  'Tự động hóa Content Marketing đa kênh với N8N',
  'content-marketing-automation-n8n',
  'Marketing Automation',
  'Digital Agency - Marketing Agency',
  'Xây dựng hệ thống tự động lên lịch, đăng bài, và phân tích hiệu suất content trên 15+ kênh social media cho 30 khách hàng.',
  '<h2>Thách thức</h2><p>Agency quản lý content marketing cho 30 khách hàng trên nhiều nền tảng (Facebook, Instagram, LinkedIn, TikTok, YouTube). Việc đăng bài thủ công rất tốn thời gian và dễ nhầm lẫn.</p><h2>Giải pháp N8N</h2><p>Workflow tự động hóa toàn diện:</p><ul><li>Tích hợp Google Sheets để quản lý content calendar</li><li>AI tự động tạo caption phù hợp với từng nền tảng</li><li>AI tối ưu hóa hashtags dựa trên trending topics</li><li>Tự động resize và format hình ảnh/video cho từng platform</li><li>Đăng bài tự động theo lịch đã định</li><li>Thu thập metrics từ tất cả các nền tảng</li><li>Tạo báo cáo phân tích tự động hàng tuần</li><li>AI đề xuất content ideas dựa trên performance data</li></ul><h2>Kết quả</h2><ul><li>Tiết kiệm 120 giờ làm việc mỗi tháng</li><li>Tăng 200% số lượng content được đăng</li><li>Tăng 150% engagement rate trung bình</li><li>Giảm 90% lỗi đăng bài sai thời gian/kênh</li><li>Agency có thể phục vụ thêm 15 khách hàng mới</li></ul>',
  '/placeholder.svg',
  true,
  3
),
(
  'Xử lý hóa đơn tự động với AI OCR và N8N',
  'invoice-processing-automation-n8n',
  'Financial Automation',
  'AccountPro - Dịch vụ kế toán',
  'Tự động hóa quy trình xử lý hóa đơn từ nhận, trích xuất dữ liệu, đến ghi sổ kế toán, giảm 90% thời gian xử lý.',
  '<h2>Vấn đề</h2><p>AccountPro xử lý hơn 1000 hóa đơn mỗi tháng cho 50+ doanh nghiệp. Việc nhập liệu thủ công gây tốn thời gian và nhiều sai sót.</p><h2>Giải pháp</h2><p>Workflow N8N + AI OCR:</p><ul><li>Tự động nhận hóa đơn từ email, upload form, và scan app</li><li>AI OCR trích xuất thông tin: số hóa đơn, ngày tháng, nhà cung cấp, items, số tiền</li><li>Xác thực dữ liệu với database nhà cung cấp</li><li>Kiểm tra duplicate invoices tự động</li><li>Tự động ghi sổ vào phần mềm kế toán (MISA, Fast)</li><li>Routing hóa đơn cần phê duyệt đến manager</li><li>Gửi thông báo thanh toán khi đến hạn</li><li>Tạo báo cáo công nợ tự động</li></ul><h2>Kết quả đạt được</h2><ul><li>Giảm 90% thời gian xử lý hóa đơn</li><li>Tăng độ chính xác lên 99.5%</li><li>Giảm 70% chi phí nhân công data entry</li><li>Thanh toán đúng hạn tăng 95%</li><li>Tiết kiệm $3000/tháng chi phí vận hành</li></ul>',
  '/placeholder.svg',
  true,
  4
),
(
  'Lead Generation & Nurturing tự động với N8N và AI',
  'lead-generation-nurturing-n8n',
  'Sales Automation',
  'SalesBoost - B2B SaaS',
  'Xây dựng hệ thống tự động thu thập, chấm điểm, và nurture leads, tăng 300% conversion rate và giảm 50% sales cycle.',
  '<h2>Bối cảnh</h2><p>SalesBoost có nhiều nguồn leads nhưng thiếu hệ thống quản lý hiệu quả, dẫn đến bỏ lỡ nhiều cơ hội và sales cycle kéo dài.</p><h2>Giải pháp N8N Workflow</h2><p>Hệ thống lead generation & nurturing tự động:</p><ul><li>Thu thập leads từ website forms, LinkedIn, webinars, trade shows</li><li>AI enrichment: tự động tìm kiếm thông tin công ty, industry, size</li><li>Lead scoring tự động dựa trên behavior và firmographics</li><li>Phân loại leads theo ICP (Ideal Customer Profile)</li><li>Drip email campaigns tự động theo segment</li><li>Chatbot AI trả lời câu hỏi và qualify leads</li><li>Tự động assign hot leads cho sales reps</li><li>Thông báo Slack khi lead có hành vi quan trọng</li><li>Sync data với CRM (HubSpot/Salesforce)</li></ul><h2>Kết quả</h2><ul><li>Tăng 300% lead conversion rate</li><li>Giảm 50% thời gian sales cycle</li><li>Tăng 400% số lượng qualified leads</li><li>80% leads được nurture tự động</li><li>Revenue tăng 250% trong 6 tháng</li></ul>',
  '/placeholder.svg',
  true,
  5
),
(
  'HR Onboarding Automation với N8N',
  'hr-onboarding-automation-n8n',
  'HR Automation',
  'TalentHub - HR Tech Company',
  'Tự động hóa quy trình onboarding nhân viên mới từ A-Z, giảm 75% thời gian HR và cải thiện employee experience.',
  '<h2>Thách thức</h2><p>Mỗi tháng TalentHub onboard 20-30 nhân viên mới. Quy trình thủ công gây tốn thời gian HR và trải nghiệm nhân viên chưa tốt.</p><h2>Giải pháp</h2><p>N8N workflow tự động hóa toàn bộ onboarding:</p><ul><li>Trigger: Nhận viên mới được thêm vào HRIS</li><li>Tạo tài khoản email, Slack, các công cụ làm việc tự động</li><li>Gửi welcome email với lịch trình onboarding chi tiết</li><li>Tự động gửi documents cần ký (contract, NDA, policies)</li><li>Tạo task list trong project management tool</li><li>Assign buddy và gửi thông báo cho team</li><li>Schedule meetings với các bộ phận</li><li>Gửi training materials theo lộ trình 30-60-90 days</li><li>Chatbot AI trả lời câu hỏi thường gặp</li><li>Thu thập feedback tự động sau mỗi milestone</li></ul><h2>Kết quả</h2><ul><li>Giảm 75% thời gian HR cho onboarding</li><li>Time-to-productivity giảm từ 60 xuống 30 ngày</li><li>Employee satisfaction tăng từ 3.5/5 lên 4.8/5</li><li>100% compliance với các quy trình bắt buộc</li><li>HR có thể focus vào strategic initiatives</li></ul>',
  '/placeholder.svg',
  true,
  6
),
(
  'Đồng bộ dữ liệu đa hệ thống với N8N',
  'multi-system-data-sync-n8n',
  'Data Integration',
  'RetailChain - Chuỗi bán lẻ',
  'Kết nối và đồng bộ real-time giữa 8 hệ thống khác nhau (POS, ERP, CRM, WMS), đảm bảo data consistency 100%.',
  '<h2>Vấn đề</h2><p>RetailChain sử dụng 8 hệ thống riêng biệt cho các chức năng khác nhau, dẫn đến dữ liệu không đồng bộ, báo cáo sai lệch, và quyết định dựa trên data cũ.</p><h2>Giải pháp N8N</h2><p>Data integration platform với N8N:</p><ul><li>Kết nối với 8 hệ thống: POS, ERP, CRM, WMS, Accounting, HR, Marketing, BI</li><li>Real-time sync với webhook triggers</li><li>Data transformation và mapping tự động</li><li>Conflict resolution với business rules</li><li>Error handling và retry logic</li><li>Audit trail cho mọi thay đổi</li><li>Master data management</li><li>API gateway cho integration mới</li></ul><h2>Kết quả</h2><ul><li>100% data consistency across systems</li><li>Real-time reporting thay vì wait 24h</li><li>Giảm 95% manual data entry</li><li>Giảm 80% data errors</li><li>Decision-making nhanh hơn 10x</li><li>Dễ dàng thêm hệ thống mới</li></ul>',
  '/placeholder.svg',
  true,
  7
),
(
  'Email Marketing Automation với AI Personalization',
  'email-marketing-ai-personalization-n8n',
  'Marketing Automation',
  'EduTech - Online Learning Platform',
  'Tự động hóa email marketing với AI personalization, tăng open rate 150% và conversion rate 200%.',
  '<h2>Bối cảnh</h2><p>EduTech có 100K+ users nhưng email campaigns chung chung, không được cá nhân hóa, dẫn đến open rate thấp và nhiều unsubscribes.</p><h2>Giải pháp</h2><p>N8N workflow với AI personalization:</p><ul><li>Phân tích behavior: courses viewed, completed, time spent, interaction</li><li>AI phân loại users thành segments chi tiết</li><li>AI tạo subject lines tối ưu cho từng segment</li><li>Personalized content recommendations dựa trên learning path</li><li>Dynamic content trong email theo user profile</li><li>Optimal send time prediction cho từng user</li><li>A/B testing tự động và chọn variant tốt nhất</li><li>Re-engagement campaigns cho inactive users</li><li>AI chatbot follow-up trong email</li></ul><h2>Kết quả</h2><ul><li>Open rate tăng từ 15% lên 38%</li><li>Click-through rate tăng từ 2% lên 12%</li><li>Conversion rate tăng 200%</li><li>Unsubscribe rate giảm 60%</li><li>Revenue from email tăng 300%</li></ul>',
  '/placeholder.svg',
  true,
  8
),
(
  'Document Processing với AI và N8N',
  'ai-document-processing-n8n',
  'Document Automation',
  'LegalTech - Law Firm',
  'Tự động xử lý và phân loại hàng nghìn tài liệu pháp lý, trích xuất thông tin quan trọng, giảm 85% thời gian xử lý.',
  '<h2>Thách thức</h2><p>Văn phòng luật xử lý hàng trăm contracts, agreements, và legal documents mỗi tuần. Review thủ công rất tốn thời gian và dễ bỏ sót điều khoản quan trọng.</p><h2>Giải pháp N8N + AI</h2><p>Intelligent document processing system:</p><ul><li>Tự động nhận documents từ email, upload portal, scan</li><li>AI phân loại document type (contract, NDA, agreement, etc.)</li><li>OCR và extract text từ PDFs, images</li><li>AI trích xuất key information: parties, dates, amounts, terms</li><li>Identify potential risks và unusual clauses</li><li>Compare với standard templates</li><li>Tạo summary và highlight key points</li><li>Route documents đến đúng lawyer dựa trên expertise</li><li>Store trong document management system với metadata</li><li>Set reminders cho important dates</li></ul><h2>Kết quả</h2><ul><li>Giảm 85% thời gian xử lý document</li><li>Tăng 95% accuracy trong data extraction</li><li>Zero missed deadlines</li><li>Lawyers focus được vào high-value work</li><li>Có thể handle 3x số lượng cases</li></ul>',
  '/placeholder.svg',
  true,
  9
),
(
  'Real-time Notification System với N8N',
  'real-time-notification-system-n8n',
  'Communication Automation',
  'FinTech - Payment Platform',
  'Xây dựng hệ thống thông báo real-time đa kênh, đảm bảo 99.9% uptime và delivery rate, cải thiện user trust.',
  '<h2>Bối cảnh</h2><p>FinTech platform cần thông báo users về transactions, security alerts, và updates quan trọng qua nhiều kênh. Hệ thống cũ chậm, thiếu reliable, và không theo dõi được delivery.</p><h2>Giải pháp N8N</h2><p>Multi-channel notification system:</p><ul><li>Event-driven architecture với webhook triggers</li><li>Intelligent routing: chọn kênh phù hợp (SMS, email, push, in-app)</li><li>Priority-based queuing cho critical alerts</li><li>Rate limiting và throttling</li><li>Retry logic với exponential backoff</li><li>Fallback mechanisms: nếu SMS fail thì email</li><li>Delivery tracking và confirmation</li><li>User preference management</li><li>Template management với A/B testing</li><li>Real-time monitoring dashboard</li><li>Compliance với regulations (opt-out, quiet hours)</li></ul><h2>Kết quả</h2><ul><li>99.9% system uptime</li><li>98% notification delivery rate</li><li>Latency giảm từ 30s xuống 2s</li><li>User trust score tăng 40%</li><li>Giảm 70% support tickets về missed notifications</li><li>Scalable: handle 1M+ notifications/day</li></ul>',
  '/placeholder.svg',
  true,
  10
);
