import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Calculator } from './components/Calculator';
import { ScenarioComparison } from './components/ScenarioComparison';
import { About } from './components/About';
import { Button } from './components/ui/button';
import { Download, RotateCcw } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

// Default values for the calculator
export const defaultValues = {
  localCustomers: 100,
  touristCustomers: 50,
  localFrequency: 7,
  touristFrequency: 30,
  targetDishes: 200,
  avgGroupSize: 3,
  dishesPerPerson: 2,
  walkInDaily: 20,
  weekdayShowUp: 85,
  weekendShowUp: 75,
  noShowRate: 15
};

export default function App() {
  const [values, setValues] = useState(defaultValues);

  const handleReset = () => {
    setValues(defaultValues);
    toast.success('รีเซ็ตค่าเริ่มต้นแล้ว');
  };

  const handleExport = () => {
    // Mock export functionality
    toast.success('กำลังส่งออกข้อมูล...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Rotation Calculator</h1>
            <p className="text-gray-600 mt-1">เครื่องมือคำนวณการหมุนเวียนลูกค้าสำหรับธุรกิจร้านอาหาร</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleReset} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              รีเซ็ต
            </Button>
            <Button onClick={handleExport} className="flex items-center gap-2 bg-[#761F1C] hover:bg-red-800">
              <Download className="w-4 h-4" />
              ส่งออก
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mb-6">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="comparison">Scenario Comparison</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <Calculator values={values} setValues={setValues} />
          </TabsContent>

          <TabsContent value="comparison">
            <ScenarioComparison />
          </TabsContent>

          <TabsContent value="about">
            <About />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}