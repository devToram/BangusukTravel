from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import requests

import datetime as dt
import os
import zipfile   
import shutil
import time

options = webdriver.ChromeOptions()
mobile_emulation = {"deviceName": "Nexus 5"}
options.add_experimental_option("mobileEmulation", mobile_emulation)


driver = webdriver.Chrome('./chromedriver.exe', chrome_options=options)

driver.implicitly_wait(5)

#########################################################################################
#########################################################################################
#########################################################################################
driver.get("https://www.instagram.com/explore/tags/보라보라섬")
#########################################################################################
#########################################################################################
#########################################################################################
time.sleep(3)
img_list = []

for i in range(0, 1):        ###################################################################
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    img = soup.select("img[srcset]")
    img_list += img
    img_list = list(set(img_list))
    
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(1)
img_list
src_list = []
for t in img_list:
    srcset = t.attrs['srcset']              
    srcset_list = srcset.split(",")         
    item = srcset_list[len(srcset_list)-1]  
    url = item[:item.find(" ")]             
    src_list.append(url)                    
    

src_list = list(set(src_list))
src_list

datetime = dt.datetime.now().strftime("%y%m%d_%H%M")
dirname = "insta_%s" % (datetime)

user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36"
session = requests.Session()
count = 0

if not os.path.exists(dirname):
    os.mkdir(dirname)
zipfile_name = '%s.zip' % dirname
insta_zip = zipfile.ZipFile(zipfile_name, 'w')
for image_url in src_list:
    count += 1
    path = "%s/%04d.jpg" % (dirname, count)
    try:
        r = session.get(image_url, stream=True)
        if r.status_code != 200:
            raise Exception
        with open(path, 'wb') as f:
            f.write(r.raw.read())
            
        insta_zip.write(path)  
    except:
        
        continue
insta_zip.close()
shutil.rmtree(dirname)
print( "$$$$" )