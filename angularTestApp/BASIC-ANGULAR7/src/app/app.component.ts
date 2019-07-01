import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  form: FormGroup;
  questionFile = new Array<any>();
  anwerBox= new Array<Ans>();
  id: any;

  constructor(  private builder:FormBuilder){

    this.form = this.builder.group({
      id:this.id
    });

    this.questionFile =  [{
      "id": 1,
      "title": "ออกกำลังกาย/เล่นกีฬา"
  },
  {
      "id": 2,
      "title": "วิเคราะห์ภาวะเศรษฐกิจ"
  },
  {
      "id": 3,
      "title": "อยากอยู่บ้านกับเพื่อนเยอะ ๆ"
  },
  {
      "id": 4,
      "title": "ทำงานตามตัวอย่างที่มีมากกว่าให้คิดทำเอาเอง"
  },
  {
      "id": 5,
      "title": "อยากเล่นการเมือง"
  },
  {
      "id": 6,
      "title": "ชอบอยู่คนเดียว"
  },
  {
      "id": 7,
      "title": "ออกสำรวจหาข้อมูลผู้ว่างงานในหมู่บ้าน"
  },
  {
      "id": 8,
      "title": "วิชาวิทยาศาสตร์"
  },
  {
      "id": 9,
      "title": "นักสังคมสงเคราะห์"
  },
  {
      "id": 10,
      "title": "เจ้าหน้าที่บันทึกข้อมูล/พิมพ์ดีด"
  },
  {
      "id": 11,
      "title": "นักเล่นหุ้น/นักเศารษฐศาสตร์/นักธุรกิจ"
  },
  {
      "id": 12,
      "title": "นักร้องหรือนักแสดง"
  },
  {
      "id": 13,
      "title": "เป็นนายช่างหรือโฟร์แมนควบคุมการก่อสร้าง"
  },
  {
      "id": 14,
      "title": "เจ้าหน้าที่วิเคราะห์แผนงานและนโยบาย"
  },
  {
      "id": 15,
      "title": "เป็นเจ้าหน้าที่ฝ่ายบุคคล"
  },
  {
      "id": 16,
      "title": "พนักงานคลังสินค้า/บัญชี"
  },
  {
      "id": 17,
      "title": "ขายประกันหรือพนักงานขายตรง(ไดเร็กเซลส์)"
  },
  {
      "id": 18,
      "title": "นักเขียนการ์ตูน"
  },
  {
      "id": 19,
      "title": "ผู้จัดการทีมกีฬาหรือผู้ฝึกสอน(โค้ช)"
  },
  {
      "id": 20,
      "title": "ศึกษาเรื่องยาสมุนไพร"
  },
  {
      "id": 21,
      "title": "ช่างเสริมสวย"
  },
  {
      "id": 22,
      "title": "เสมียน/ธุรการ"
  },
  {
      "id": 23,
      "title": "ทำธุรกิจหรือการค้า"
  },
  {
      "id": 24,
      "title": "นักประพันธ์เพลง"
  },
  {
      "id": 25,
      "title": "ชอบงานสิบสวนสอบสวน"
  },
  {
      "id": 26,
      "title": "รับปรึกษาปัญหาต่างๆให้เพื่อน"
  },
  {
      "id": 27,
      "title": "ประชาสัมพันธ์โรงแรม"
  },
  {
      "id": 28,
      "title": "พนักงานธนาคาร"
  },
  {
      "id": 29,
      "title": "ทนายความ"
  },
  {
      "id": 30,
      "title": "นักดนตรี"
  },
  {
      "id": 31,
      "title": "นักแข่งรถ"
  },
  {
      "id": 32,
      "title": "นักทดลองเพาะเลี้ยงสัตว์เช่นปลาสวยงาม"
  },

  {
      "id": 33,
      "title": "ครูหรืออาจารย์"
  },
  {
      "id": 34,
      "title": "เลขานุการ"
  },
  {
      "id": 35,
      "title": "เป็นโฆษกหรือพิธีกร"
  },
  {
      "id": 36,
      "title": "สภาปนิกหรือมัณฑนากรหรือจิตรกร"
  },
  {
      "id": 37,
      "title": "เป็นช่างซ่อมบำรุงต่างๆ"
  },
  {
      "id": 38,
      "title": "ชอบสะสมของเก่าของโบราณ"
  },
  {
      "id": 39,
      "title": "ช่วยเหลือคนบาดเจ็บ"
  },
  {
      "id": 40,
      "title": "พนักงานสินเชื่อหรือเจ้าหน้าที่การเงิน"
  },
  {
      "id": 41,
      "title": "เป็นตัวแทนโต้วาทีของห้องเรียน"
  },
  {
      "id": 42,
      "title": "นักแต่งเพลงหรือผู้เรียบเรียงเสียงประสาน"
  },
  {
      "id": 43,
      "title": "ช่างเครื่องกล, เครื่องยนต์"
  },
  {
      "id": 44,
      "title": "เปิดร้านขายยา"
  },
  {
      "id": 45,
      "title": "นักจัดรายการวิทยุ(ดีเจ)/ทีวี"
  },
  {
      "id": 46,
      "title": "เจ้าหน้าที่ห้องสมุด(บรรณารักษ์)"
  },
  {
      "id": 47,
      "title": "นักการเมือง/กำนัน/ผู้ใหญ่บ้าน/อบต."
  },
  {
      "id": 48,
      "title": "นางแบบหรือนายแบบ"
  },
  {
      "id": 49,
      "title": "ทหาร/ตำรวจสายปราบปราม"
  },
  {
      "id": 50,
      "title": "นักเขียนโปรแกรมคอมพิวเตอร์"
  },
  {
      "id": 51,
      "title": "พระสงฆ์หรือบาทหลวงสอนศาสนา"
  },
  {
      "id": 52,
      "title": "พนักงานรักษาความปลอดภัย"
  },
  {
      "id": 53,
      "title": "ผู้พิพากษา(ศาล)หรืองานด้านกฏหมาย"
  },
  {
      "id": 54,
      "title": "นักข่าว"
  },

]


  }

  submit(){
    console.log("this is submit");

    console.log(this.form)
  }

  select(event){

  console.log(event.target.value)
  console.log(event.target.name)
    // this.anwerBox.id = event.target.name;
    // this.anwerBox.values = event.target.value;
  }

}

/**
* rule of class control popertis
* interface no constructor
*
* get array
*/
interface Ans {
id:string;
value:string;

}


