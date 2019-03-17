module.exports = function check(str, bracketsConfig) {
  var chars = str.split(''),
          stack = [],
          closeIndex,
          openIndex,
          openIndex1;
          repeatBrackets=0;
          lig=bracketsConfig.length;
          if (lig==5){
            open = ['1','3','5','7','8'];
            close = ['2','4','6','7','8'];
          }else {
            open = ['{', '(', '[','|'];
            close = ['}', ')', ']','|'];
          }
      for (var i = 0, len = chars.length; i < len; i++) {
         openIndex = open.indexOf(chars[i]);
            if (openIndex !== -1) {
                if (chars[i]=='|' || chars[i]=='7' ||chars[i]=='8'){repeatBrackets++;}
            stack.push(openIndex);
            }
         closeIndex = close.indexOf(chars[i]);
         if (closeIndex !== -1) {
             if (chars[i]=="|" || chars[i]=="7" ||chars[i]=="8")
             {
                if (repeatBrackets>1)
                    {
                    openIndex1 = stack.pop();
                    openIndex = stack.pop();
                    repeatBrackets=repeatBrackets-2;
                  }
          }
             else if ((chars[i]!=='|' || chars[i]!=='7' ||chars[i]!=='8')) {
               openIndex = stack.pop();
               if ((chars[i]=='|' || chars[i]=='7' ||chars[i]=='8')){repeatBrackets--;}
              }
             if (closeIndex !== openIndex) {
                  if (chars[i]!=='7' ||chars[i]!=='8') {   
                    console.log(chars[i]);
                    return false;
                  }
             }
         }
      }
      if (stack.length !== 0) {
        return false;
      }
      return true;
  }