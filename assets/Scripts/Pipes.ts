import { _decorator, Component, Node, screen, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Pipes')
export class Pipes extends Component {
    @property({
        type: Node,
        tooltip: "Top pipe",
    })
    public topPipe: Node;

    @property({
        type: Node,
        tooltip: "Bottom pipe",
    })
    public bottomPipe: Node;

    public tempStartLocationTop = new Vec3;
    public tempStartLocationBottom = new Vec3;
    public scene = screen.windowSize;

    
}


