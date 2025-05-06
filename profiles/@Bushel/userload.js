function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://bushel.truevine.online/profiles/@Bushel/userimg.svg'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'Bushel'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@Bushel'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = 'A Bushel of ministries'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = '<p>Bushel is a church networking platform developed by Truevine Online. Unlike other platforms, churches get to make their profiles from scratch or with templates - unlike every other platform out there. </p><p>Churches on Bushel have more branding and networking freedom than any other networking platform out there. On Bushel, churches can expand upon the features we provide and integrate Bushel into their platforms.</p><p>So what are you waiting for? Time to start adding to your Bushel.</p>'

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = 'https://github.com/True-Vine-Online/bushel'
  var gitlabLink = ''
  var gitLink = ''
  var xLink = ''
  var instagramLink = ''

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://bushel.truevine.online/source/icons/brand-github.svg'
  var gitlabIcon = 'https://bushel.truevine.online/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://bushel.truevine.online/source/icons/brand-git.svg'
  var xIcon = 'https://bushel.truevine.online/source/icons/brand-x.svg'
  var instagramIcon = 'https://bushel.truevine.online/source/icons/brand-instagram.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = '<a href="'+githubLink+'" class="card-footer-item"> <img src="'+githubIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '5:00 PM - 6 May 2025'

}
