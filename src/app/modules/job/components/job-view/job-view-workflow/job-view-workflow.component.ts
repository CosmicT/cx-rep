import { Component } from '@angular/core';
import { faFileExport, faColumns } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-job-view-workflow',
    templateUrl: './job-view-workflow.component.html'
})
export class JobViewWorkflowComponent {
    faFileExport = faFileExport;
    faColumns = faColumns;
}