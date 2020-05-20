export class Character {
    id: string;
    name: string;
    picture: string;
    buildUp: string;
    nemesisId: number;
    storyTagId: number;

    constructor(name: string, picture: string, buildUp: string, nemesisId: number, storyTagId: number) {
        this.name = name;
        this.picture = picture;
        this.buildUp = buildUp;
        this.nemesisId = nemesisId;
        this.storyTagId = storyTagId;
    }
}