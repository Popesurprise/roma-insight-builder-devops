resource "aws_instance" "app_server" {
  ami           = "ami-0c02fb55956c7d316" # Ubuntu (update per region)
  instance_type = "t2.micro"

  key_name = var.key_name

  vpc_security_group_ids = [var.sg_id]

  user_data = file("${path.module}/../../scripts/user_data.sh")

  tags = {
    Name = "roma-insight-server"
  }
}