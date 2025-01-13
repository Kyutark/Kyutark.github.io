---
title: Linux Commands
date: 2025-01-12 00:04:00 +0900
categories: [STUDY]
tags: [CS]
---
These are the commands I tend to use on Linux servers, such as _eevee_ in CSBL.   
EEVEE has the unique ability to evolve into eight different creatures: Sylveon, Umbreon, Espeon, Leafeon, Glaceon, Vaporeon, Jolteon, or Flareon.

#### 1. cd (change directory)
**examples :**
- `cd ..`:  Move to the parent directory.
- `cd ~`: Move to the home directory.
- `cd -`: Move to the previous directory.

#### 2. mkdir (make directory)
**options :**
- `-p`: Create parent directories as needed. 
**examples :**
- `mkdir [folder]`: Creat a directory named `forder`.
- `mkdir -p [parent]/[child]`: Create the `child` directory along with the `parent` if it doesn't exist.

#### 3. rm (remove)
**options :**
- `-r`: Recursively delete directories and their contents.
- `-f`: Force deletion without confirmation.
- `-i`: Prompt before deleting.  
**examples :**
- `rm [file.txt]`: Delete `file.txt`.
- `rm -rf [folder]`: Forcefully delete the `folder` directory and its contents

#### 4. rmdir (remove directory)
**options :**
- `--ignore-fail-on-non-empty`: Ignore errors if the directory is not empty.  
**examples :**
 - `rmdir [empty_folder]`: Remove an empty directory named `empty_folder`

#### 5. mv (move, or rename files or directories)
**options :**
 - `-i`: Prompt before overwriting files.
 - `-u`: Move only newer files.
 - `-v`: Show details of the operation.  
**examples :**
- `mv [file.txt] /destination/`: Move `file.txt` to the `destination` directory
- `mv [old_name.txt] [new_name.txt]`: Rename `old_name.txt` to `new_name.txt`

#### 6. ls (list directory contents)
**options :**
- `-a`: Show all files, including hidden ones.
- `-l`: Display detailed file information (permissions, owner size, modification time).
- `-h`: Display sizes in a human-readable format.
- `-R`: Recursively list subdirectories.  
**examples :**
- `ls -alh`: Show all files, detailed information, and sizes in a human-readable format.

#### 7. cat (concatenate)
**options :**
 - `-n`: Display line numbers.
 - `-E`: Show `$` at the end of each line.  
**examples :**
- `cat [file.txt]`: Display the contents of `file.txt`.
- `cat [file1.txt] [file2.txt] > [merged_file.txt]`: Merge two files into one.
- `cat -n [file.txt]`: Display the contents of `file.txt` with line numbers.

#### 8. nano
**options :**
- `-m`: Enable mouse support
- `-v`: Open files in read-only mode.
- `-B`: create a backup of the file.
- `-C [directory]`: Save backup files in a specific directory.  
**examples :**
- `nano [file.txt]`: Open `file.txt` for editing.
- `nano -v [file.txt]`: Open `file.txt` in read-only mode.
- `nano -m [file.txt]`: Enable mouse support while editing `file.txt`.

#### 9. python 3
**options :**
- `-v` or `--version`: Check the Python version.
- `-c [code]`: Execute a single line of Python code.
- `-m [module]`: Run a specific Python module.
- `--help`: Display help for Python commands.  
**examples :**
- `python3 -v`: Check the Python 3 version.
- `python3 -c "print('Hello World!)"`: Execute a single line of code.
- `python3 [script.py]`: Run the `script.py` file.
