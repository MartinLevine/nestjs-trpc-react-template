import { Injectable } from '@nestjs/common'

@Injectable()
export class GreetingService {
    getHello(name: string): string {
        return `Welcome, ${name}`
    }
}
