import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdminApiService } from '~/app/admin/services/admin-api.service';
import { AuthService } from '~/app/admin/services/auth.service';
import { PortfolioResource } from '~/app/types/content/PortfolioResource';
import { PortfolioItem } from '~/app/types/content/PortfolioItem';

@Injectable()
export class AdminPortfolioService {
  private content: Subject<PortfolioResource> = new Subject<PortfolioResource>();
  public content$: Observable<PortfolioResource> = this.content.asObservable();

  constructor(private api: AdminApiService, private auth: AuthService) {}

  public async fetch(): Promise<void> {
    const res = await this.api.get<PortfolioResource>('/portfolio.json');
    this.content.next(res);
  }

  public async saveFilters(data: string[]): Promise<void> {
    await this.api.put<string[], string[]>(
      `/portfolio/filters.json?auth=${this.auth.idToken}`,
      data
    );
    await this.fetch();
  }

  public async savePortfolio(data: PortfolioItem[]): Promise<void> {
    await this.api.put<PortfolioItem[], PortfolioItem[]>(
      `/portfolio/portfolio.json?auth=${this.auth.idToken}`,
      data
    );
    await this.fetch();
  }
}
