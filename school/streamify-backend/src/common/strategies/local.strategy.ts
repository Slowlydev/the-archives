import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../../user/user.entity';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super();
	}

	async validate(username: User['username'], password: User['password']): Promise<User> {
		const user = await this.authService.validate(username, password);

		if (!user) {
			throw new UnauthorizedException(`invalid credentials`);
		}

		return user;
	}
}
