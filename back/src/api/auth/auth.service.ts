import { getLogger } from '../../utils/logging';
import { ErrorResponse } from '../commons/errors/error.model';
import { AuthInfo } from "./auth.model";

export class AuthService {
    private logger = getLogger('OrganizationsService');

    async getAuthInfoForToken(token: string): Promise<AuthInfo> {
        this.logger.info("querying auth info for token = '%s'", [token]);
        // TODO: replace with actual database call

        const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWFiYjE4My1iZWQ5LTRhOGEtYjBhNC1iMTZmMDNlNGI2ZTciLCJuYW1lIjoiQWRtaW4iLCJzdXJuYW1lIjoiQWRtaW5vdmljaCIsImlhdCI6MTUxNjIzOTAyM30.YOLCKilLg5nRIiKBxArWTXodLHCkLYrNglaFFfIqpdU'
        const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzZjRkN2Q4NS0zMWM1LTQ2NzEtOGU3NC0zNzM4ODUyNmE5NzciLCJuYW1lIjoiSm9obiIsInN1cm5hbWUiOiJEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.Dj8n2QIHgL-3g8JYblII5_OjQA5G35gPxim0oH9waDM'

        if (token == userToken) {
          return new AuthInfo(
            '3f4d7d85-31c5-4671-8e74-37388526a977',
            'John',
            'Doe',
            'b1cceb82-2a95-40b7-a5be-0f09ff2f48d5',
            'TestOrg',
            false
          )
        } else if (token == adminToken) {
          return new AuthInfo(
            '79abb183-bed9-4a8a-b0a4-b16f03e4b6e7',
            'Admin',
            'Adminovich',
            'f8ad056f-fd4c-4f44-9fe3-440831c04fd1',
            'AdminOrg',
            true
          )
        }
        throw new ErrorResponse(401, 'invalid token')
    }
}

export default new AuthService()