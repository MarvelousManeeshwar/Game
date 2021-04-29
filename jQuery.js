class select{
    constructor(str){
        this.id = function(ids){
            return document.querySelector(ids)
        }
        this.html = function(content){
            if(content==undefined){
                return this.id(str).innerHTML
            }
            else{
                this.id(str).innerHTML = content
            }
        }
        this.val = function(value){
            if(value==undefined){
                return this.id(str).value;
            }
            else{
                this.id(str).value = value;
            }
        }
        this.attr = function(attribute, attributeValue){
            if((attributeValue==attribute)&&(attribute==undefined)){
            }
            else if(attributeValue==undefined){
                return this.id(str).getAttribute(attribute)
            }
            else{
                this.id(str).setAttribute(attribute , attributeValue )
            }
        }
        this.full = this.id(str);
        this.addhtml = function(addContent){
            this.html(this.html()+addContent)
        }
        this.hide = function(){
            this.id(str).style.display = "none"
        }
        this.show = function(display){
            this.id(str).style.display = display
        }
        if(this.id(str).style.display == "none"){
            this.displayNumber = 1;
        }
        else{
            this.displayNumber = 0;
        }
        this.toggle = function(displayType){
            if(this.displayNumber==1){
                this.id(str).style.display = displayType
                this.displayNumber = 0;
            }
            else{
                this.id(str).style.display = "none";
                this.displayNumber = 1;
            }
        }
        this.css = function(attributeone){
            this.attr("style", attributeone);
        }
        this.click = function(){this.id(str).click()}
        this.on = function(a,b,c){
            this.id(str).addEventListener(a,b,c)
        }
        this.focus = function(){this.id(str).focus()}
    }
}
function $(strings){
    return new select(strings)
}
