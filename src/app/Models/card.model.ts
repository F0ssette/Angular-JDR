export class Card {
    id: string;
    type: string;
    theme: string;
    title: string;
    misteryIdentity: string;
    attention: string;
    crack: string;
    powerTagId: number;
    weaknessTagId: number;
    improvementId: number;

    constructor(type: string, theme: string, title: string, misteryIdentity: string, attention: string, crack: string, powerTagId: number, weaknessTagId: number, improvementId: number) {
        this.type = type;
        this.theme = theme;
        this.title = title;
        this.misteryIdentity = misteryIdentity;
        this.attention = attention;
        this.crack = crack;
        this.powerTagId = powerTagId;
        this.weaknessTagId = weaknessTagId;
        this.improvementId = improvementId;
    }
}