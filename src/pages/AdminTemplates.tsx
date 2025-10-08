import { WorkflowTemplatesManager } from "@/components/admin/WorkflowTemplatesManager";
import { Card } from "@/components/ui/card";

const AdminTemplates = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Quản lý Workflow Templates</h1>
        <p className="text-muted-foreground">Tạo, chỉnh sửa và xóa workflow templates</p>
      </div>
      <Card className="p-6">
        <WorkflowTemplatesManager />
      </Card>
    </div>
  );
};

export default AdminTemplates;
