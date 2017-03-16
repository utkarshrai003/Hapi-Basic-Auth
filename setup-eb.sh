
set -x
set -e

# Move to root directory of the current User
# cd

# # Getting zipped EB command line tool
# wget https://s3.amazonaws.com/elasticbeanstalk/cli/AWS-ElasticBeanstalk-CLI-2.6.3.zip -O aws-cli-2.6.3
#
# # unzipping
# unzip aws-cli-2.6.3

# create aws directory
mkdir /home/ubuntu/.aws

# create eb profile config file
touch /home/ubuntu/.aws/config

# give permission
chmod 600 /home/ubuntu/.aws/config

# Creating Profile
echo "[profile myProfile]" >> /home/ubuntu/.aws/config
echo "aws_access_key_id" = $AWS_ACCESS_KEY_ID >> /home/ubuntu/.aws/config
echo "aws_secret_access_key" = $AWS_SECRET_KEY >> /home/ubuntu/.aws/config
