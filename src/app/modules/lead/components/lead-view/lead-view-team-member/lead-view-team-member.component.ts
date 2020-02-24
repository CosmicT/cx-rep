import { PaginationModel } from './../../../../../models/pagination.model';
import { TeamMemberModel } from 'src/app/models/master-data/team-member.model';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { CompetitionModel } from 'src/app/modules/account/models/competition.model';
import CustomStore from 'devextreme/data/custom_store';
@Component({
    selector: 'app-lead-view-team-member',
    templateUrl: './lead-view-team-member.component.html'
})
export class LeadViewTeamMemberComponent implements OnInit {
    @Input() competition: CompetitionModel;
    teamMembers: Array<TeamMemberModel>;
    teamMembersDataSource: any;
    defaultPagination :PaginationModel;
    constructor(
        private _MasterDataService:MasterDataService
    ) {
        this.competition = new CompetitionModel();
        this.defaultPagination =new PaginationModel();
    }
    ngOnInit(){
        this.getTeamMembers();
    }
    getTeamMembers() {
        this._MasterDataService.getTeamMember('leads', '', this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.teamMembers = data.data;
                this.teamMembersDataSource = new CustomStore({
                    loadMode: 'raw',
                    key: 'id',
                    cacheRawData: false,
                    load: () => {
                        return data.data;
                    }
                });
            });
    }
}