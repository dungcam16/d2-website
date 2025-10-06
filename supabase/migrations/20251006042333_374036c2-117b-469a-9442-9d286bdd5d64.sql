-- Insert sample workflow templates from n8n.io

INSERT INTO public.workflow_templates (
  title,
  slug,
  description,
  content,
  author,
  thumbnail_url,
  category,
  tags,
  difficulty_level,
  node_count,
  integrations,
  workflow_json
) VALUES 
(
  'Angie, Personal AI Assistant with Telegram Voice and Text',
  'angie-personal-ai-assistant-telegram',
  'Trợ lý AI cá nhân hoạt động qua Telegram với khả năng tương tác bằng giọng nói và văn bản. Angie có thể tóm tắt email hàng ngày, tra cứu lịch, nhắc nhở công việc và tìm thông tin liên hệ.',
  '<h2>Cách thức hoạt động</h2>
<p>Workflow này tạo ra một trợ lý AI cá nhân tên Angie hoạt động qua Telegram. Angie có thể tóm tắt email hàng ngày, tra cứu lịch, nhắc nhở công việc sắp tới và lấy thông tin liên hệ. Trợ lý có thể tương tác với người dùng qua cả giọng nói và văn bản.</p>

<h2>Các bước thực hiện</h2>

<h3>1. Telegram Trigger</h3>
<p>Workflow bắt đầu với trigger Telegram lắng nghe các sự kiện tin nhắn đến. Hệ thống xác định tin nhắn đến là voice hay text. Nếu là voice, file âm thanh sẽ được lấy và chuyển đổi thành văn bản bằng OpenAI Speech to Text API.</p>

<h3>2. AI Assistant</h3>
<p>Request từ Telegram được chuyển đến trợ lý AI (Angie).</p>

<h3>3. Tích hợp công cụ</h3>
<p>Trợ lý AI được trang bị nhiều công cụ:</p>
<ul>
  <li><strong>Get Email:</strong> Sử dụng Gmail API để lấy email gần đây, lọc theo ngày</li>
  <li><strong>Get Calendar:</strong> Truy xuất các sự kiện từ Google Calendar</li>
  <li><strong>Get Reminders:</strong> Lấy reminder từ Todoist</li>
  <li><strong>Get Contacts:</strong> Tìm kiếm thông tin liên hệ từ Google Contacts</li>
</ul>

<h3>4. Phản hồi</h3>
<p>Sau khi xử lý, trợ lý gửi phản hồi lại cho người dùng qua Telegram, có thể dưới dạng văn bản hoặc voice message.</p>',
  'Derek Cheung',
  'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop',
  'AI Chatbot',
  ARRAY['telegram', 'ai assistant', 'openai', 'gmail', 'google calendar', 'todoist', 'voice'],
  'intermediate',
  12,
  ARRAY['Telegram', 'OpenAI', 'Gmail', 'Google Calendar', 'Todoist', 'Google Contacts'],
  '{"nodes": [], "connections": {}, "embed_url": "https://n8n.io/workflows/2462-angie-personal-ai-assistant-with-telegram-voice-and-text/embed"}'::jsonb
),
(
  'Generate AI Viral Videos with NanoBanana & VEO3',
  'generate-ai-viral-videos-nanobanana-veo3',
  'Tự động tạo video viral bằng AI với NanoBanana và VEO3, sau đó chia sẻ lên các nền tảng mạng xã hội qua Blotato. Hoàn hảo cho content creators và marketers.',
  '<h2>Workflow này dành cho ai?</h2>
<p>Workflow được thiết kế cho <strong>content creators, marketers và entrepreneurs</strong> muốn tự động hóa quy trình sản xuất video và đăng bài lên mạng xã hội. Nếu bạn thường xuyên đăng nội dung quảng cáo hoặc viral trên TikTok, YouTube Shorts, Instagram Reels, LinkedIn, workflow này sẽ tiết kiệm hàng giờ làm việc thủ công.</p>

<h2>Giải quyết vấn đề gì?</h2>
<p>Việc tạo video chất lượng cao và phân phối chúng lên nhiều nền tảng mạng xã hội có thể rất tốn thời gian. Workflow này tự động hóa toàn bộ quy trình từ ý tưởng đến việc xuất bản.</p>

<h2>Các bước thực hiện</h2>

<h3>STEP 1 - Collect Idea & Image</h3>
<p>Thu thập ý tưởng và hình ảnh từ Google Sheets hoặc nguồn dữ liệu khác.</p>

<h3>STEP 2 - Create Image with NanoBanana</h3>
<p>Sử dụng NanoBanana API để tạo hình ảnh chất lượng cao từ text prompt.</p>

<h3>STEP 3 - Generate Video AI Script</h3>
<p>Tạo script cho video bằng AI dựa trên ý tưởng và hình ảnh.</p>

<h3>STEP 4 - Generate Video with VEO3</h3>
<p>Sử dụng Google VEO3 để tạo video từ script và hình ảnh.</p>

<h3>STEP 5 - Auto Post to All Platforms</h3>
<p>Tự động đăng video lên tất cả các nền tảng mạng xã hội (TikTok, YouTube, Instagram, LinkedIn, Facebook) thông qua Blotato.</p>

<h2>Yêu cầu</h2>
<ul>
  <li>Tài khoản n8n (cloud hoặc self-hosted)</li>
  <li>API keys cho các dịch vụ: NanoBanana, Google AI (VEO3), Blotato</li>
  <li>Google Sheets để quản lý ý tưởng content</li>
  <li>Tài khoản mạng xã hội được kết nối với Blotato</li>
</ul>',
  'Dr. Firas',
  'https://www.dr-firas.com/nano-banana.png',
  'Content Creation',
  ARRAY['ai video', 'veo3', 'nanobanana', 'social media', 'automation', 'content creation', 'viral'],
  'advanced',
  15,
  ARRAY['Google Sheets', 'HTTP Request', 'NanoBanana', 'Google VEO3', 'Blotato', 'OpenAI'],
  '{"nodes": [], "connections": {}, "embed_url": "https://n8n.io/workflows/8270-generate-ai-viral-videos-with-nanobanana-and-veo3-shared-on-socials-via-blotato/embed"}'::jsonb
);