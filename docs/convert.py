from datetime import datetime
import glob
import sys
import os

############################################################

TODAY = datetime.now().strftime('%Y%m%d')
OLD_CONSTANT = 'constant.js'
NEW_CONSTANT = 'constant.{}.js'.format(TODAY)

############################################################

IGNORE = {'index.html', 'google28a870164b4edc1c.html'}

for filename in glob.glob('**/*.html', recursive=True):
    if os.path.basename(filename) in IGNORE: continue
    print(filename)
    t = None
    
    with open(filename) as fin:
        t = fin.read()
        old = '{}"></script>'.format(OLD_CONSTANT)
        new = '{}"></script>'.format(NEW_CONSTANT)
        t = t.replace(old, new)
    
    with open(filename, 'w') as fout:
        fout.write(t)
