<img src="https://i.imgur.com/pF2sUV5.jpg">

# SEI Installfest

We'll be installing the following tools.

- Slack
- Homebrew
- Xcode
- VS Code
- Git
- Node.js
- PostgreSQL
- MongoDB
- Python
- Django
- Spectacle
- Zoom
- TablePlus

## Slack

We will be using slack to communicate throughout the course. You will receive an invite to the relevant channels via e-mail. You can login via the web browser, but downloading / installing the app is highly recommended.

[Download Slack](https://slack.com/downloads)

Remember to drag the Slack app into the Applications folder when you open the downloaded archive.

## Homebrew (Mac Only)

Homebrew is a package manager that we will use to install various command line tools in our class.

Open up terminal, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

If you are prompted to install the XCode CLI, say yes and your homebrew installation will continue.

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding with the rest of the install fest.

Lastly, make sure to run `brew update` to make sure you have the latest lists of available software.


## Xcode (Mac Only)

We do not use Xcode in class but some other applications that we do use require some Xcode libraries. Normally, all you need is the Xcode CLI which should have already been installed when you installed Homebrew. If it didn't get installed, you can use this command:

```
xcode-select --install
```

If you need to, you can install Xcode through the App Store. (You probably don't need to.) [Link here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)


## Visual Studio Code

Text editors are a personal choice. One of the most popular open source text editors these days, for good reason, is Visual Studio Code.

> Note: VS Code's _keyboard shortcuts_ are different than the shortcuts used by the Sublime or Atom editors. If you already know Sublime's shortcuts and don't want to learn those of VS Code, it's possible to configure VS Code to use Sublime's.

Download and install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/).

**Important**: Be sure that VS Code is in your Mac's `Applications` folder.

#### Add Ability to Launch VS Code by typing `code`

1. Launch VS Code using spotlight (`command + space` - then start typing `vs c` until you see the app, then press enter).
2. Type `shift + command + P` to open the command palette.
3. Start typing `shell command` and when you the<br>`Shell Command: Install 'code' command in PATH` command - click it!
4. Quit VS Code and Terminal.
5. Relaunch Terminal
6. You should now be able to open a folder to edit by typing `code .`

Check [this link](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

## Git

Git is the version control software we will be using - it's extremely popular.

You should have already installed Git as instructed to complete the pre-work.

**You should have git installed, but if you do not have git...**

**For Mac:**

We can use Homebrew to install it on a Mac:

```
brew install git
```

**For Windows:**

If using Windows download git and the git bash shell from [here](https://gitforwindows.org/)

**For Linux:**

```
sudo apt-get install git
```

#### Github

[Github](https://github.com/) provides a way to host Git repos in the cloud.  It enables collaboration and is wildly popular.

You should have already opened a personal Github account, however, you need to have a General Assembly Github Enterprise account as well.  You can get one by signing up here:  [https://git.generalassemb.ly/join](https://git.generalassemb.ly/join)

#### Configuring a Global git ignore

> Note: This is **IMPORTANT**

Everyone should have a global **git ignore** file so that you don’t have to worry about making the appropriate entries in a project’s git ignore.

First, create the file:  `touch ~/.gitignore_global`

Next, configure git to use this file:  `git config --global core.excludesfile ~/.gitignore_global`

Finally, lets put some good stuff in there (`.gitignore_global`):

```sh
# This is a list of rules for ignoring files in every Git repositories on your computer.
# See https://help.github.com/articles/ignoring-files

# Compiled source #
###################
*.class
*.com
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases #
######################
*.log

# OS generated files #
######################
._*
.DS_Store
.DS_Store?
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Testing #
###########
.rspec
capybara-*.html
coverage
pickle-email-*.html
rerun.txt
spec/reports
spec/tmp
test/tmp
test/version_tmp

# node #
########
node_modules

# Rails #
#########
**.orig
*.rbc
*.sassc
.project
.rvmrc
.sass-cache
/.bundle
/db/*.sqlite3
/log/*
/public/system/*
/tmp/*
/vendor/bundle


# Ruby #
########
*.gem
*.rbc
.bundle
.config
.yardoc
_yardoc
doc/
InstalledFiles
lib/bundler/man
pkg
rdoc
tmp

# for a library or gem, you might want to ignore these files since the code is
# intended to run in multiple environments; otherwise, check them in:
# Gemfile.lock
# .ruby-version
# .ruby-gemset

# CTags #
#########
tags

# Env #
#######
.env

# Python #
#######
*.pyc
__pycache__/
```

## Optional: Oh My ZSH (Mac and Linux)

If you want a more interactive shell that makes it easier to work with the command line and work with git, have a look at Oh My ZSH. Follow the installation instructions [here](https://github.com/ohmyzsh/ohmyzsh)

If using Windows, the git bash terminal should be sufficient.

## Node.js

Node is a JavaScript engine for the backend. We use it to power our web servers and connect to our databases.

**For Mac:**
```
brew install node
```

**For Windows:**

Install by downloading Node.js [here](https://nodejs.org/en/download/)

**For Linux:**

First let's update our sources:

```
sudo apt-get update
```

Then we'll add nvm using its native installation script (make sure you're including the most up to date version of nvm where it says VERSION UMBER GOES HERE in the URL below.  The format should be three numbers separated by dots, such as 0.35.3. [Check for the latest release version here.](https://github.com/creationix/nvm/releases):

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v`**VERSION NUMBER GOES HERE**`/install.sh | bash`

Then refresh our new nvm settings:

```bash
source ~/.bashrc
```

Now we need to find an appropriate node version to install:

```bash
nvm ls-remote | grep -i lts
```

This will find all of the Long Term Support versions of Node available to us. The very last version in the looooong list that will appear is going to be the version we will install! (Currently this is version v12.16.1), so let's install it!

```bash
nvm install v12.16.1
```

Now we need to set our version of Node to be our global version:

```bash
nvm use v12.16.1
```

NOTE: If you don't see this line at the end of the install:

```bash
Creating default alias: default -> v12.16.1 (-> vv12.16.1)
```

Run this command to set your default version:

```bash
nvm alias default v12.16.1
```

You should see the version number of node display in your terminal (in this case v12.16.1).

NOTE: Sometimes you might see tutorials etc that use `nodejs`in place of `node` in the command line. This is because they're not using `nvm` to manage their node versions! Remember that in our case we're using `node` as seen in the previous command.


Verify the installation afterwards by running:

```
node -v
npm -v
```

The above commands should display versions without any errors. To verify that all the required permissions are set correctly, try to install a package such as the useful _nodemon_ globally:

```
npm install -g nodemon
```

## PostgreSQL

**For Mac:**

Install the **PostgreSQL** database management system (DBMS) using Homebrew with this command:

```
brew install postgresql
```

After Postgres is installed run this command:

```
brew services start postgresql
```
 
Followed by this command to test the install by creating a new database named the same as the current system user:
 
```
createdb
```

**For Linux:**

Follow instructions [here](http://postgresguide.com/setup/install.html) or [here](https://wiki.postgresql.org/wiki/Detailed_installation_guides)

**For Windows:**
The installer for Windows can be found [here](https://www.postgresql.org/download/windows/)


## Installing MongoDB

**For Mac:**

Install **MongoDB** using Homebrew using the following commands:

```
brew tap mongodb/brew
```

The above command might take a moment or two to complete.  When finished, install MongoDB with:

```
brew install mongodb-community
```

You start the Mongo database server with the following command:

```
brew services start mongodb-community
```

The above command also ensures that the MongoDB engine runs after restarting your computer.

More info about installing MongoDB using Homebrew can be found [here](https://github.com/mongodb/homebrew-brew).


**For Linux:**
Follow instructions [here](https://docs.mongodb.com/manual/administration/install-on-linux/)

**For Windows:**
Follow instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


## Installing Python 3

> Note: Due to time constraints and for simplicity, we will not be using Python "virtual environments" during SEI.  If you are familiar with using virtual environments, you may continue to use them.  If you decide to continue to develop using Python beyond SEI, your next step would be to learn about using virtual environments.

Brew is also used to install Python 3. (Python 2 is already installed on your Mac.)

**For Mac:**
Install **Python** using Homebrew with this command: `brew install python`. 

**For Linux:**
Follow the instructions [here](https://realpython.com/installing-python/#linux), but use the newest version of python 3

**For Windows:**
Follow the instructions [here](https://realpython.com/installing-python/#windows)


You can test the installation by running `python3 --version`.

Python 3's package manager, `pip3` should have automatically been installed with Python 3.  Test that it was installed by running `pip3 --version`.

## Installing Django

We will use `pip3` to install Django, a robust web framework for Python. We will be installing the latest version (3.x.x):

```
pip3 install Django
```

## Installing Spectacle (Mac)

Install [Spectacle](https://www.spectacleapp.com/) for resizing windows.

This free "productivity" tool is invaluable when it comes to minimizing the time spent sizing windows using the mouse.

## Installing Imgur

Create an account on [imgur.com](https://imgur.com/) and install [mac2imgur](https://github.com/mileswd/mac2imgur) to ease uploading screenshots and other images from your computer to your imgur account.

## Zoom

[Download the Zoom client](https://zoom.us/download#client_4meeting) and install it.

## TablePlus

Table plus with help you manage and visualize your data in PostgreSQL and MongoDB. They have a free trial that is worth trying out. It will make it easier to manage your databases and app data. Install from [here](https://tableplus.com/)

Other options for Database Clients:

**MongoDB:**
[MongoDB Compass](https://www.mongodb.com/products/compass)
[Robo 3T](https://robomongo.org/download)

**PostgreSQL**
[Postico](https://eggerapps.at/postico/)
[pgAdmin](https://www.pgadmin.org/download/)
