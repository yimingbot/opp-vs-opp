import { FC, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import classes from './hacker.module.scss'

const requestAnimationFrame = window.requestAnimationFrame

type Size = { width: number; height: number };

type CodeStruct = {
    x: number;
    y: number;
    speed: number;
    text: string;
    color: string
}

const step = 35;
// eslint-disable-next-line prefer-const
let { width, height }: Size = {
    width: document.body.clientWidth,
    height: document.body.clientHeight
};
const colLen = Math.floor(width / 100);
if (height < 50) {
    height = screen.height;
}

export const HackBackground: FC<PropsWithChildren> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>();
    const codeRainArr = useRef<CodeStruct[][]>()

    const createCodeRain = useCallback(() => {

        for (let n = 0; n < colLen; n++) {
            const col: CodeStruct[] = [];
            //基础位置，为了列与列之间产生错位
            const basePos = Math.floor(Math.random() * height / 2);
            //随机速度 3~13之间
            const speed = Math.floor(Math.random() * 3) + 0.5;
            //每组的x轴位置随机产生
            const colX = Math.floor(Math.random() * n * 80) + n * 80;

            //绿色随机
            const r = 0;
            const g = 255;
            const b = 0;

            'sequoia capital'.toLocaleUpperCase().split('').forEach((text, i) => {
                const code = {
                    x: colX,
                    y: basePos + step * i,
                    speed: speed,
                    text: text,
                    color: `rgba(${r},${g},${b}, ${0.4 - (i * .02)})`
                }
                col.push(code);
            })
            codeRainArr.current === undefined ? codeRainArr.current = [col] : codeRainArr.current.push(col)
        }
    }, [])

    const codeRaining = useCallback(() => {
        const ctx = ctxRef.current
        ctx!.fillStyle = '#000'
        ctx!.fillRect(0, 0, width, height);
        codeRainArr.current!.forEach((col) => {
            col.forEach((code) => {
                if (code.y > height) {
                    //如果超出下边界则重置到顶部
                    code.y = 0;
                } else {
                    //匀速降落
                    code.y += code.speed;
                }
                ctx!.fillStyle = code.color;
                ctx!.textAlign = 'center';
                ctx!.fillText(code.text, code.x, code.y);
            })
        });
        requestAnimationFrame(codeRaining);
    }, [])

    useEffect(() => {
        const canvasDom = canvasRef.current
        if (canvasDom) {
            const ctx = canvasRef.current.getContext('2d');
            ctxRef.current = ctx
            if (ctx) {
                ctx.font = 'bold 26px microsoft yahei';
                createCodeRain();
                codeRaining();
            }
        }
    }, [])

    return <div className={classes.root}>
        <canvas className={classes.canvas} ref={canvasRef} id={'bg'} width={width} height={height}></canvas>
        {props.children}
    </div>
}
