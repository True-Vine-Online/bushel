function user_build(){
    //Build variable
    var po = '<p>'
    var pc = '</p>'

    //Input variables
    var pimg = document.getElementById("profileIcon").value
    var pname = document.getElementById("profileName").value
    var pgit = document.getElementById("profileGit").value
    var ptagline = document.getElementById("profileTagline").value
    var pcontent = document.getElementById("profileContent").value

    
    /*Service Vars*/
    /*DO NOT EDIT LINK ICONS*/
    var githubIcon = 'https://bushel.truevine.online/source/icons/brand-github.svg'
    var gitlabIcon = 'https://bushel.truevine.online/source/icons/brand-gitlab.svg'
    var gitIcon = 'https://bushel.truevine.online/source/icons/brand-git.svg'
    var xIcon = 'https://bushel.truevine.online/source/icons/brand-x.svg'
    var instagramIcon = 'https://bushel.truevine.online/source/icons/brand-instagram.svg'

    //Output lines
    var l1 = 'function user_load(){'
    var l2 = 'document.getElementById("profileIcon").src = '+'"'+pimg+'"'
    var l3 = 'document.getElementById("profileName").innerHTML = '+'"'+pname+'"'
    var l4 = 'document.getElementById("profileGit").innerHTML = '+'"'+pgit+'"'
    var l5 = 'document.getElementById("profileTagline").innerHTML = '+'"'+ptagline+'"'
    var l6 = 'document.getElementById("profileContent").innerHTML = '+'"'+pcontent+'"'
    var l7 = 'document.getElementById("profileLinks").innerHTML = /*LINKS*/'
    var close = '}'

    //Output command
    document.getElementById("profile_code").innerHTML = po+l1+pc+po+l2+pc+po+l3+pc+po+l4+pc+po+l5+pc+po+l6+pc+po+l7+pc+po+close+pc

}