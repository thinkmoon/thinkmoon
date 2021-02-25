package=$(node -p -e "require('./package.json').dependencies")
echo $package
dependencies=$(echo $package | sed "s/,/\n/g" | sed "s/\({\|}\)//g" | sed "s/:/@/g" | sed "s/\('\|\^\|\~\)//g" | sed "s/@ /@/g")
for loop in $dependencies
do
    echo $loop
    npm pack $loop
done
