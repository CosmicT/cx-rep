import { Component, OnInit } from '@angular/core';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { TeamMemberModel } from 'src/app/models/master-data/team-member.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import CustomStore from 'devextreme/data/custom_store';

@Component({
    selector: 'app-contact-view-team-member',
    templateUrl: './contact-view-team-member.component.html'
})
export class ContactViewTeamMemberComponent implements OnInit {
    defaultPagination: PaginationModel
    teamMembers: Array<TeamMemberModel>;
    teamMembersDataSource: any;
    constructor(private _MasterDataService: MasterDataService) {
        this.defaultPagination = new PaginationModel;
        this.teamMembers = Array<TeamMemberModel>();
    }
    ngOnInit() {
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