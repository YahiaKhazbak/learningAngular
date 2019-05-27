export class LoggingService {
    logStausChange(status: string) {
        console.log(`A servers status updated, new status: ${status}`);
    }
}