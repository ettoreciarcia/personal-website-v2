
terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "hechaorganization"
    workspaces {
      name = "site"
    }
  }
}

provider "aws" {
  region = var.region
}

