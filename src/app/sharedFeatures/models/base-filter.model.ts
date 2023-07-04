import { FilterMetadata } from 'primeng/api';
import { Pagination } from './pagination.model';

export class OldBaseFilter {
  sorting: string = 'id';
  filterMetadata!: { [s: string]: FilterMetadata[] };
  pagination: Pagination = new Pagination();
}

export class BaseFilter {
  Page_Index: number | null;
  Page_Count: number | null;
  Code: string;
  Name: string;
}
