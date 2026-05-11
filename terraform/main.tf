module "security_group" {
  source = "./modules/security_group"
}

module "ec2" {
  source   = "./modules/ec2"
  key_name = var.key_name
  sg_id    = module.security_group.sg_id
}