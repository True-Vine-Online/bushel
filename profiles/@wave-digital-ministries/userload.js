function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://avatars.githubusercontent.com/u/53627732?s=200&v=4'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'Wave Discipleship Ministries'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@wave-digital-ministries'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = 'Making waves for His Kingdom.'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = '<i>Wave Discipleship Ministries</i>, formally <i>Wave Digital Ministries</i>, is an education focussed ministry. Our goal is to make Biblical education available to all.<p> <a href="https://www.wavedm.net/" target="_BLANK">Learn More</a></p>'

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = 'https://github.com/wave-digital-ministries'
  var gitlabLink = ''
  var gitLink = ''
  var xLink = 'https://x.com/wdm_net'
  var instagramLink = 'https://www.instagram.com/wdm_net/'

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-github.svg'
  var gitlabIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-git.svg'
  var xIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-x.svg'
  var instagramIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-instagram.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = '<a href="'+githubLink+'" class="card-footer-item"> <img src="'+githubIcon+'" width="50px" alt="Social Button"> </a><a href="'+xLink+'" class="card-footer-item"> <img src="'+xIcon+'" width="50px" alt="Social Button"> </a><a href="'+instagramLink+'" class="card-footer-item"> <img src="'+instagramIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '7:22 PM - 24 Jun 2025'

}
