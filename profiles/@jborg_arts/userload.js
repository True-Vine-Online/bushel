function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://avatars.githubusercontent.com/u/48691704?v=4'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'Jake'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@jborg_arts'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = 'Christian | Technology Polymath | Purveyor of Organic Intelligence | Debugging reality <a href="https://bushel.truevine.online/profiles/@wave-digital-ministries">@wdm_net</a> & <a href="https://bushel.truevine.online/profiles/@borginnovation">@borginnovation</a>'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = ''

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = 'https://github.com/JacobBorgProgramming'
  var gitlabLink = ''
  var gitLink = ''
  var xLink = 'https://x.com/jborg_arts'
  var instagramLink = ''
  var externalLink = 'https://borginnovations.com/'

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://bushel.truevine.online/source/icons/brand-github.svg'
  var gitlabIcon = 'https://bushel.truevine.online/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://bushel.truevine.online/source/icons/brand-git.svg'
  var xIcon = 'https://bushel.truevine.online/source/icons/brand-x.svg'
  var instagramIcon = 'https://bushel.truevine.online/source/icons/brand-instagram.svg'
  var externalIcon = 'https://bushel.truevine.online/source/icons/external-link.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = '<a href="'+githubLink+'" class="card-footer-item"> <img src="'+githubIcon+'" width="50px" alt="Social Button"> </a><a href="'+xLink+'" class="card-footer-item"> <img src="'+xIcon+'" width="50px" alt="Social Button"> </a><a href="'+externalLink+'" class="card-footer-item"> <img src="'+externalIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '5:22 PM - 15 Mar 2025'

}
