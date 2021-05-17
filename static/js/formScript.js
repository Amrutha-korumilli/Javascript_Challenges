function validate()
{
    let text;
    let password = document.myForm.pas;
    let conpass = document.myForm.cpas;
    let name= document.myForm.name;
    let mail  =document.myForm.email;
    let uname = document.myForm.uname;
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let check = document.myForm.check.checked;
    let valid = {
        'name':false,'password':false,'conpass':false,'mail':false,'uname':false,'check':false
    }
    
            name.onkeyup = function(){
                if( name.value == "" ) {

                document.querySelector('#img-name-tick').style.display = 'none';
                document.querySelector('#img-name-wrong').style.display = 'block';
                return false;
                }
                else
                {

                    document.querySelector('#img-name-wrong').style.display = 'none';
                    document.querySelector('#img-name-tick').style.display = 'block';
                    valid['name']=true;

                }
            }
            mail.onkeyup = function(){
                if(mail.value == "" ) {
                
                    document.querySelector('#img-mail-tick').style.display = 'none';
                    document.querySelector('#img-mail-wrong').style.display = 'block';
                    return false;
                }
                else
                {
                    if(!re.test(mail.value))
                    {
                        text = "invalid email";
                        document.querySelector('#img-mail-tick').style.display = 'none';
                        document.querySelector('#img-mail-wrong').style.display = 'block';
                        displayError(text);
                        return false;
                    }
                    else
                    {

                    document.querySelector('#img-mail-wrong').style.display = 'none';
                    document.querySelector('#img-mail-tick').style.display = 'block';
                    displayError("");
                    valid['mail']=true;


                        
                    }
                }
            }
              
           uname.onkeyup =function(){
                if(uname.value=="")
                {
                    document.querySelector('#img-uname-tick').style.display = 'none';
                    document.querySelector('#img-uname-wrong').style.display = 'block';
                    return false;
                }
                else
                {
                    document.querySelector('#img-uname-wrong').style.display = 'none';
                    document.querySelector('#img-uname-tick').style.display = 'block';
                    valid['uname']=true;

    
                }
            }
            password.onkeyup =function(){
                if(password.value=="")
                {
                    document.querySelector('#img-pas-tick').style.display = 'none';
                document.querySelector('#img-pas-wrong').style.display = 'block';
                return false;
                }
            }
            conpass.onkeyup =function(){
                if(conpass.value=="")
                {
                    document.querySelector('#img-cpas-tick').style.display = 'none';
                    document.querySelector('#img-cpas-wrong').style.display = 'block';
                    return false;
                }
                else
                {
                    if(password.value!=conpass.value)
                    {
                        text = "Password don't match";

                document.querySelector('#img-pas-tick').style.display = 'none';
                document.querySelector('#img-cpas-tick').style.display = 'none';
                document.querySelector('#img-pas-wrong').style.display = 'block';
                document.querySelector('#img-cpas-wrong').style.display = 'block';
                displayError(text);
                 return false;
                    }
                    else{
                        document.querySelector('#img-pas-wrong').style.display = 'none';
                        document.querySelector('#img-cpas-wrong').style.display = 'none';
                        document.querySelector('#img-pas-tick').style.display = 'block';
                        document.querySelector('#img-cpas-tick').style.display = 'block';
                        displayError("");

                    }
                    if(password.value.length<8)
                {
                    text = "Password should be minimum 8 characters";
                    document.querySelector('#img-pas-tick').style.display = 'none';
                    document.querySelector('#img-cpas-tick').style.display = 'none';
                    document.querySelector('#img-pas-wrong').style.display = 'block';
                    document.querySelector('#img-cpas-wrong').style.display = 'block';
                    displayError(text);
                    return false;
                }
                else{
                    document.querySelector('#img-pas-wrong').style.display = 'none';
                    document.querySelector('#img-cpas-wrong').style.display = 'none';
                    document.querySelector('#img-pas-tick').style.display = 'block';
                    document.querySelector('#img-cpas-tick').style.display = 'block';
    
                }
                if(!regularExpression.test(password.value))
                {
                    text = "password should contain atleast one number and one special character";
                    document.querySelector('#img-pas-tick').style.display = 'none';
                    document.querySelector('#img-cpas-tick').style.display = 'none';
                    document.querySelector('#img-pas-wrong').style.display = 'block';
                    document.querySelector('#img-cpas-wrong').style.display = 'block';
                    displayError(text);
                    return false;
                }
                else{
                    document.querySelector('#img-pas-wrong').style.display = 'none';
                    document.querySelector('#img-cpas-wrong').style.display = 'none';
                    document.querySelector('#img-pas-tick').style.display = 'block';
                    document.querySelector('#img-cpas-tick').style.display = 'block';
    
                }
            }
        }
        
            if(!check)
            {
                text = "Please agree to terms&conditions";
                displayError(text);
                return false;
            }
            alert("Successfully signed up")
            return true;
            

}
function displayError(text)
{
    document.querySelector('#result').textContent=text;
    document.querySelector('#result').style.color = "red";
}