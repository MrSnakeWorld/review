export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Record<string, unknown>;
	phone: string;
}
