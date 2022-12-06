namespace GratyTaty {
    /**
     *  trying to use some function in Polish
     * @param x the horizontal coordinate of the LED
     * @param y the vertical coordinate of the LED
     */
    //% blockId=cos %x %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
     export function mypoint(x: number, y: number) {
         led.plot(x,y);
    }

}
