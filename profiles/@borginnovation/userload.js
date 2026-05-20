function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://pbs.twimg.com/profile_images/2027512867239694341/FfUzzjBc_400x400.jpg'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'Borg Innovations'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@borginnovation'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = '*Not an AI company'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = '<p>Developers of:</p><p>C0RT3X—Find human voices in academia</p><p>Luminay—Rediscovering efficient code</p><p>Author|—A quiet writing nook</p>'

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = 'https://github.com/BorgInnovations'
  var gitlabLink = ''
  var gitLink = ''
  var xLink = ''
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
  document.getElementById("profileLinks").innerHTML = '<a href="'+githubLink+'" class="card-footer-item"> <img src="'+githubIcon+'" width="50px" alt="Social Button"> </a><a href="'+externalLink+'" class="card-footer-item"> <img src="'+externalIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '4:47 PM - 20 May 2026'

}
