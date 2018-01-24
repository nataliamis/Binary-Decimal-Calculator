import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log(this.getName());
    }

    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr('contenteditable', 'true');
        activeElement.removeClass('focus');

    }
    updateResult(){
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            let valueResult = parseInt( $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]) );
            if( this.resultNumberArray[i] != valueResult ) {
                $resultNumber.eq(j).children(":first-child").show();
            }
        }
    }
    initEvents(){
        super.initEvents();
        let plusElement = $('.operator-bar').find('span');
        plusElement.on('click',() => {
            this.checkNumber();
            this.updateResult();
        })
    }
    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  >= 10) {
                result[i] = carryBit % 10;
                result[i-1] += 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }
}

export {DecCalculator};





