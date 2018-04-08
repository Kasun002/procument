import { Injectable } from '@angular/core';
import { ApiEndpoints } from './api-endpoints';
import { HttpsService } from './https.service';

@Injectable()
export class DashboardService {
  private tenderData: any;
  private categoryData = [];
  constructor(private httpService: HttpsService,
    private apiEndPoints: ApiEndpoints) { }

  getAllCategories() {
    return this.httpService.get(this.apiEndPoints.getAllCategory());
  }

  getAllTenders(pageNumber, numberOfItems) {
    return this.httpService.get(
      this.apiEndPoints.getAllTender() + '/' + pageNumber.toString() + '/' + numberOfItems.toString());
  }

  getTendersbyCategory(categoryId, pageNumber, numberOfItems) {
    return this.httpService.get(
      this.apiEndPoints.getByCategory + '/' + categoryId.toString() + '/' +
      pageNumber.toString() + '/' + numberOfItems.toString());
  }

  /**
   *
   * @param area
   * @param pageNumber
   * @param numberOfItems
   */
  getTendersbyArea(area, pageNumber, numberOfItems) {
    return this.httpService.get(
      this.apiEndPoints.getByArea + '/' + area + '/' +
      pageNumber.toString() + '/' + numberOfItems.toString());
  }

  // Non Api data services

  /**
   * Set data to tender
   * @param tender
   */
  setTenderData(tender: any) {
    this.tenderData = tender;
  }

  getTenderData() {
    return this.tenderData;
  }

  /**
   * Set category data to the header
   * @param category
   */
  setCategoryData(category: any){
    this.categoryData = category;
  }

  getCategoryData(){
    return this.categoryData;
  }
}
