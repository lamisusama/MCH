import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  isOpen: boolean = false;

  listItems = [
    {
      listName: 'الرئيسية',
      link: `/dashboard`,
      name: 'home',
      active: false,
      children: [],
    },
    {
      listName: 'المناطق',
      link: `/regions`,
      name: 'settings',
      active: false,
      children: [],
    },
    {
      listName: 'ملف',
      name: 'file-text',
      active: false,
      children: [
        {
          listName: 'قطع الغيار',
          link: '/home',
          children: [],
        },
        {
          listName: 'الماكينات',
          children: [],
        },
        {
          listName: 'كل الماكينات',
          children: [],
        },
        {
          listName: 'الخدمات',
          children: [],
        },
        {
          listName: 'ملف العملاء',
          children: [],
        },
        {
          listName: 'ملف الموردين',
          children: [],
        },
        {
          listName: 'مندوب المشتريات',
          children: [],
        },
        {
          listName: 'شجرة الحسابات',
          children: [],
        },
        {
          listName: 'الإنتقال لفرع اخر',
          children: [],
        },
      ],
    },
    {
      listName: 'الأصول',
      link: '/assets',
      name: 'grid',
      active: false,
      children: [],
    },
    {
      listName: 'الحسابات',
      name: 'percent',
      active: false,
      children: [
        {
          listName: 'حسابات عامة ',
          link: '/home',

          children: [],
        },
        {
          listName: 'المقبوضات',

          children: [],
        },
        {
          listName: ' المصروفات',
          children: [],
        },
      ],
    },
    {
      listName: 'المخزون',
      name: 'package',
      active: false,
      children: [
        {
          listName: ' حركات إضافة أصناف ',
          link: '',

          children: [],
        },
        {
          listName: 'حركات صرف أصناف',

          children: [],
        },
        {
          listName: ' حركات تحويل أصناف',
          children: [],
        },
        {
          listName: ' حركات إستلام أصناف',
          children: [],
        },
      ],
    },
    {
      listName: 'المشتريات',
      name: 'credit-card',
      active: false,
      children: [
        {
          listName: 'طلبات الشراء',
          link: '',

          children: [],
        },
        {
          listName: 'فواتير المشتريات  ',

          children: [],
        },
      ],
    },
    {
      listName: 'الصيانة',
      name: 'sliders',
      active: false,
      children: [
        {
          listName: 'إيصال إستلام ماكينة',
          link: '',

          children: [],
        },
        {
          listName: 'أوامر الصيانة',

          children: [],
        },
        {
          listName: 'حركة الصيانة',

          children: [],
        },
      ],
    },
    {
      listName: 'أدوات',
      name: 'layers',
      active: false,
    },
    {
      listName: 'إعدادات',
      name: 'settings',
      active: false,
      children: [
        {
          listName: 'إعدادات الشركة',
          link: '',

          children: [],
        },
        {
          listName: 'إعدادات الأصول',

          children: [],
        },
        {
          listName: 'إعدادات الحسابات',

          children: [],
        },
        {
          listName: 'إعدادات المخزون',

          children: [],
        },
        {
          listName: 'إعدادات الصيانة',

          children: [],
        },
        {
          listName: 'إعدادات المستخدمين',

          children: [],
        },
        {
          listName: 'إعدادات النظام',

          children: [],
        },
      ],
    },
    {
      listName: 'التقارير',
      name: 'pie-chart',
      active: false,
      children: [
        {
          listName: 'تقرير إيصال إستلام نقدي',
          link: '',

          children: [],
        },
        {
          listName: 'تقرير لإيصال صرف نقدية',

          children: [],
        },
        {
          listName: 'تقرير سندات القيود ',

          children: [],
        },
        {
          listName: 'تقرير ميزان المراجعة ',

          children: [],
        },
        {
          listName: 'تقرير حركة الحساب ',

          children: [],
        },
        {
          listName: 'تقرير كشف حساب عميل',

          children: [],
        },
        {
          listName: 'ملخص الفواتير الخدمية',

          children: [],
        },
        {
          listName: 'تقرير الحسابات الختامية ',

          children: [],
        },
      ],
    },
  ];

  toggleNavBar() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  isClicked(i: number) {
    this.listItems[i].active = !this.listItems[i].active;
  }
}
