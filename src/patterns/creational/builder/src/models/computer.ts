import { ComputerBuilder } from "@/builders/computer-builder";

export interface IComputer {
    cpu: string;
    ram: number;
    storage: number;
    gpu?: string;
}

export class Computer implements IComputer {
    cpu: string;
    ram: number;
    storage: number;
    gpu?: string;

    constructor(builder: ComputerBuilder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.gpu = builder.gpu;
    }

    toString(): string {
        return `Computer [CPU: ${this.cpu}, RAM: ${this.ram}GB, Storage: ${this.storage}GB${this.gpu ? `, GPU: ${this.gpu}` : ''}]`;
    }
} 