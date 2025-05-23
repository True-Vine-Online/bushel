function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://bushel.truevine.online/profiles/@JumpIn/userimg.svg'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'JumpIn Northwest'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@JumpIn'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = 'Into all the world starts here'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = 'We believe that God has called the Church to work together in unity and honor in preaching the gospel to all nations, in making disciples, and in remembering the poor and ministering to their needs through sacrificial giving and practical service. This ministry is an expression of the heart of the Lord Jesus Christ and is an essential part of the kingdom of God.'

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = ''
  var gitlabLink = ''
  var gitLink = ''
  var xLink = ''
  var instagramLink = 'https://www.instagram.com/jump_in_nw/'

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://bushel.truevine.online/source/icons/brand-github.svg'
  var gitlabIcon = 'https://bushel.truevine.online/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://bushel.truevine.online/source/icons/brand-git.svg'
  var xIcon = 'https://bushel.truevine.online/source/icons/brand-x.svg'
  var instagramIcon = 'https://bushel.truevine.online/source/icons/brand-instagram.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = '<a href="'+instagramLink+'" class="card-footer-item"> <img src="'+instagramIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '6:00 PM - 5 May 2025'

}
