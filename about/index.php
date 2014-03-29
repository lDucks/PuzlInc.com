<?php
$title = "About";
$content = <<<EOF
    <div class="container" style="padding-top: 25px; padding-bottom: 10px;">
      <ul class="nav nav-tabs" style="margin-bottom: 15px;">
        <li class="active">
        <a href="#FrontOffice" data-toggle="tab">Front Office</a></li>
        <li><a href="#Developers" data-toggle="tab">Developers</a></li>
        <li><a href="#Designers" data-toggle="tab">Designers</a></li>
      </ul>
      <div id="jobList" class="tab-content">
        <div class="tab-pane fade active in" id="FrontOffice">
          <p><b>Trent Hensler</b> <a href="https://twitter.com/drtshock"><i class="fa fa-twitter"></i>drtshock</a>
          <br /><i>President</i>
          <br />Trent owns and founded Puzl Inc. He develops for Puzls main account, Minetime LLC.</p>
          <br />

          <p><b>Brandon Hensler</b> <a href="https://twitter.com/brandonhensler"><i class="fa fa-twitter"></i>brandonhensler</a>
          <br /><i>Vice President - Operations</i>
          <br />Brandon assists in the day to day activity of the company.</p>

        </div>
        <div class="tab-pane fade" id="Developers">
          <p><b>Steven Smith</b> <a href="https://twitter.com/blha303"><i class="fa fa-twitter"></i>blha303</a>
          <br /><i>Systems Administrator</i>
          <br />Steven works on any backend server work that Puzl needs. He also assisted in setting up the website.</p
          <br />

          <p><b>eueln</b> <a href="https://twitter.com/eueln"><i class="fa fa-twitter"></i></a>
          <br /><i>Java Developer</i>
          <br />Eueln writes Bukkit Plugins.</p>
          <br />

          <p><b>DSH105</b> <a href="https://twitter.com/_DSH105_"><i class="fa fa-twitter"></i></a>
          <br /><i>Java Developer</i>
          <br />DSH105 writes Bukkit Plugins.</p>
          <br />

          <p><b>Chase</b> <a href="https://twitter.com/chaseoes"><i class="fa fa-twitter"></i>chaseoes</a>
          <br /><i>Java Developer</i>
          <br />Chase writes Bukkit Plugins.</p>
          <br />

        </div>
        <div class="tab-pane fade" id="Designers">
          <p><i>Now hiring!</i></p>
        </div>
      </div>
    </div>
EOF;
include("/home/puzl/website/template.php");
