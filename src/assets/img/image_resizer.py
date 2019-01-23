import PIL
from PIL import Image
import os
from os import walk


baseheight = input("Enter the Base Height : ")
strratio = input("Enter the ratio : ")
num, denum = strratio.split("/")
ratio = float(num)/float(denum)
baseheight = int(baseheight)
_format = str(num)+"."+str(denum)

f = []
for (dirpath, dirnames, filenames) in walk(os.getcwd()):
    f.extend(filenames)
    break

def dir():
    if not os.path.exists("x"+str(baseheight)+" "+_format):
        os.makedirs("x"+str(baseheight)+" "+_format)
        return "./x"+str(baseheight)+" "+_format
    return "./x"+str(baseheight)+" "+_format

for element in f:

    img = Image.open(element)
    # hpercent = (baseheight / float(img.size[1]))
    #  wsize = int((float(img.size[0]) * float(hpercent)))
    wsize = ratio*baseheight
    wsize = int(wsize)
    img = img.resize((wsize, baseheight), PIL.Image.ANTIALIAS)
    img.save(dir()+"/"+element[:-4]+" x"+str(baseheight)+" "+_format+".jpg")