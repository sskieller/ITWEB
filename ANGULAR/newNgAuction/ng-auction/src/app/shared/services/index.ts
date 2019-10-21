// This file allows you to only import one path in app.module.ts for all services in this folder
import { ProductService } from './product.service';
export { Product, ProductService, ProductSearchParams } from './product.service';

export const SHARED_SERVICES = [
    ProductService
];