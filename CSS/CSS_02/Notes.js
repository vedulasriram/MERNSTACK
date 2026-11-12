/*

!! priority in css  !! 

* the code that is written at the last or nearest to the element that have the highest priority

>> inline  has the highest priority


case : 01 - internal css is written after external 
    like - 
            <head>
              external css 
            * internal css 
            </head>
* inline > internal > external

case : 02 - external css is written after internal 
    like - 
            <head>
              internal css 
            * external css 
            </head>
 inline > external > internal


todo :  when to use which one 

1. inline css 
        >> for checking purpose 
        >> if we have very few properties & only for 1 element

2. internal css 
        >> for styling multiple elements 
        >> for styling same element that u r using multiple times 

3. external css 
        >> if u have large code base 
        >> if u have more than 30 lines 

* always use external 


! syntax of css code 
selector {
        PN : PV ; 
}


?? selector : it is a keyword that is used to select the html element
        >> types of selectors
            1. tagName 
            2. className
            3. idName
            4. group
            5. universal 



#1. tagName selector 
>> syntax - 
            tagName {
                    PN : PV ; 
                    PN : PV ; 
                    PN : PV ; 
            }

    * by using the tagName, all the occurrence of that element get selected 


#2. className selector 
* it is a selector by which we can select the particular element & style that 
?? how to use that. 
        >> step : 01 - create the class 
                * syntax - .className {  
                                        PN : PV ;
                                        PN : PV ;
                                    }
        >> step : 02 - assign the className to the html element by using the class attribute 
          class = "className" means 
          like - 
                class = "redPara"
                class = "bluePara"

class = frontend interview preparation [ 11am to 12pm - mon to fri ]

class = redPara


! i want to write it down the code of css that i am going to use only for 1 element 

#idName{
          PN : PV ;
          PN : PV ;
          PN : PV ;
}

?? how to use that. 
        >> step : 01 - create the id 
                * syntax - #idName {  
                                        PN : PV ;
                                        PN : PV ;
                                    }
        >> step : 02 - assign the idName to the html element by using the id attribute 
          id = "idName" means 
          like - 
                id = "mainHeading"


!! select p , a & h2 - assign the color red 

.para{
color : red 
}

.link {
color : red 
}

.heading {
color : red 
}

!! best way = 
.para ,
.link ,
.heading {
color : red 
}


?? #4.  group selector 
* it is a way by which u can select multiple selectors [ tagName, .className , #idName ] - assign the same css code

tagName, .className , #idName {
                        PN : PV ;
                        PN : PV ;
                        PN : PV ;
        }


#5. universal selector - *
* it is used to remove the default css 

*{
                margin : 0
}

*/

