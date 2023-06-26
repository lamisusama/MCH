import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Camera,
  Heart,
  Github,
  Search,
  Bell,
  ChevronDown,
  Globe,
  Home,
  Grid,
  FileText,
  Percent,
  Package,
  CreditCard,
  Sliders,
  Layers,
  Settings,
  PieChart,
  Trash2,
  File,
} from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  Search,
  Bell,
  ChevronDown,
  Globe,
  Home,
  Grid,
  FileText,
  Percent,
  Package,
  CreditCard,
  Sliders,
  Layers,
  Settings,
  PieChart,
  Trash2,
  File,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule { }
